import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import stateCulturalData from "../../assets/Culturalinfo";
import "./StateDetail.css";
import { useTranslation } from 'react-i18next';

const aliasMap = {
  "Uttarakhand": "Uttaranchal",
  "Jammu & Kashmir": "Jammu and Kashmir",
  "Jammu and Kashmir": "Jammu and Kashmir",
  "Dadra and Nagar Haveli and Daman and Diu": "Dadra and Nagar Haveli",
};

const normalizeStateName = (stateName) => {
  if (!stateName) return "default";
  const cleaned = stateName.trim();
  return aliasMap[cleaned] || cleaned;
};

const StateDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  const resolvedKey = normalizeStateName(decodedName);
  const { t, i18n } = useTranslation();

  const getDynamicContent = (fieldKey) => {
    const isHindi = i18n.language === 'hi';
    if (isHindi && stateInfo && stateInfo[`${fieldKey}_hi`]) {
      return stateInfo[`${fieldKey}_hi`];
    }
    return stateInfo ? stateInfo[fieldKey] : null;
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    let elements = [];
    let currentList = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Match starts with -, •, or * followed by space
      const isBullet = /^[-•*]\s*(.+)/.exec(trimmed);
      if (isBullet) {
        currentList.push(<li key={`li-${index}`} style={{marginBottom: '5px'}}>{isBullet[1]}</li>);
      } else {
        if (currentList.length > 0) {
          elements.push(<ul key={`ul-${index}`} style={{marginLeft: '20px', marginBottom: '10px'}}>{[...currentList]}</ul>);
          currentList = [];
        }
        if (trimmed === '') {
          elements.push(<div key={`br-${index}`} style={{height: '10px'}}></div>);
        } else {
          elements.push(<p key={`p-${index}`} style={{marginBottom: '10px'}}>{line}</p>); // keep original to preserve internal spaces
        }
      }
    });

    if (currentList.length > 0) {
      elements.push(<ul key={`ul-end`} style={{marginLeft: '20px', marginBottom: '10px'}}>{currentList}</ul>);
    }

    return <div className="formatted-text">{elements}</div>;
  };

  const [stateInfo, setStateInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Inline editing states
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    famousFood: '',
    famousPlaces: '',
    artCultureTradition: '',
    images: []
  });

  const fetchStateDetails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states/name/${encodeURIComponent(resolvedKey)}`);
      setStateInfo(response.data);
    } catch (error) {
      console.error("Error fetching state from DB, falling back to local data:", error);
      // Fallback to local data or null
      setStateInfo(stateCulturalData[resolvedKey] || stateCulturalData.default || null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStateDetails();
  }, [resolvedKey]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      description: stateInfo?.description || t(resolvedKey + '.description') || '',
      famousFood: stateInfo?.famousFood || '',
      famousPlaces: stateInfo?.famousPlaces || '',
      artCultureTradition: stateInfo?.artCultureTradition || '',
      images: []
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, images: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const submitData = new FormData();
    const finalName = stateInfo?.name || t(resolvedKey + '.name') || decodedName;
    submitData.append('name', finalName);
    submitData.append('description', formData.description);
    submitData.append('famousFood', formData.famousFood);
    submitData.append('famousPlaces', formData.famousPlaces);
    submitData.append('artCultureTradition', formData.artCultureTradition);
    
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach(img => {
        submitData.append('images', img);
      });
    }

    try {
      if (stateInfo && stateInfo._id) {
        // Update existing state
        await axios.put(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states/${stateInfo._id}`, submitData);
      } else {
        // Create new state if it doesn't exist in DB at all
        await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states`, submitData);
      }
      
      // Refresh
      await fetchStateDetails();
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating state info:", err);
      // If we got 'Access denied', let the user know
      alert("Failed to update information. Please ensure server allows it.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="state-detail-page"><div style={{textAlign:'center', padding:'50px'}}>Loading...</div></div>;
  }

  // If state not found at all, we can allow creating it from scratch!
  const finalStateName = stateInfo?.name || t(resolvedKey + '.name') || decodedName || "State";
  
  // Combine or fallback imagery
  const localData = stateCulturalData[resolvedKey] || stateCulturalData.default || {};
  const dbImages = stateInfo?.images || [];
  const displayImages = dbImages.length > 0 ? dbImages : localData.images || [];
  
  return (
    <div className="state-detail-page">
      <div className="state-detail-card">
        
        <div className="state-detail-header" style={{ position: 'relative' }}>
          <h1>{finalStateName}</h1>
          <p className="state-detail-subtitle">
            {t("Learn more about the culture and highlights of this region.")}
          </p>
          {!isEditing && (
             <button 
               onClick={handleEditClick} 
               className="btn" 
               style={{ position: 'absolute', top: '10px', right: '10px', background: '#e07a5f', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}
             >
               Add / Edit Info
             </button>
          )}
        </div>

        <div className="state-detail-content">
          {isEditing ? (
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
              <h2>Edit {finalStateName} Information</h2>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Description (Required)</label>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  required 
                  style={{ width: '100%', minHeight: '100px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Famous Food</label>
                <input 
                  type="text" 
                  name="famousFood" 
                  value={formData.famousFood} 
                  onChange={handleChange} 
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Famous Places</label>
                <textarea 
                  name="famousPlaces" 
                  value={formData.famousPlaces} 
                  onChange={handleChange} 
                  style={{ width: '100%', minHeight: '60px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Art, Culture & Tradition</label>
                <textarea 
                  name="artCultureTradition" 
                  value={formData.artCultureTradition} 
                  onChange={handleChange} 
                  style={{ width: '100%', minHeight: '80px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>Add More Images</label>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
              </div>
              <div>
                <button type="submit" disabled={saving} style={{ background: '#38b000', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
                  {saving ? 'Saving...' : 'Save Updates'}
                </button>
                <button type="button" onClick={handleCancelEdit} style={{ background: '#333', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="state-detail-description">
                <h2>{t("Description")}</h2>
                {renderFormattedText(getDynamicContent('description') || t(resolvedKey + '.description') || "No description provided yet.")}
              </div>

              {getDynamicContent('famousFood') && (
                <div className="state-detail-section" style={{marginBottom: '20px'}}>
                  <h2>{t("Famous Food")}</h2>
                  {renderFormattedText(getDynamicContent('famousFood'))}
                </div>
              )}

              {getDynamicContent('famousPlaces') && (
                <div className="state-detail-section" style={{marginBottom: '20px'}}>
                  <h2>{t("Famous Places")}</h2>
                  {renderFormattedText(getDynamicContent('famousPlaces'))}
                </div>
              )}

              {getDynamicContent('artCultureTradition') && (
                <div className="state-detail-section" style={{marginBottom: '20px'}}>
                  <h2>{t("Art, Culture & Tradition")}</h2>
                  {renderFormattedText(getDynamicContent('artCultureTradition'))}
                </div>
              )}

              {displayImages.length > 0 && (
                <div className="state-detail-gallery">
                  <h2>{t("Images")}</h2>
                  <div className="image-grid">
                    {displayImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${finalStateName} culture ${index + 1}`}
                        className="detail-image"
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="state-detail-actions">
          <Link to="/" className="detail-back-link">
            ← {t("Back to Home")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StateDetail;
