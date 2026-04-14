import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FaUserCheck, FaStore, FaHourglassHalf, FaCheckCircle, FaTrashAlt, FaCalendarAlt, FaEye, FaPlus, FaEdit, FaMap } from "react-icons/fa";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('vendors');
  const [states, setStates] = useState([]);
  const [showStateForm, setShowStateForm] = useState(false);
  const [editingState, setEditingState] = useState(null);
  const [stateForm, setStateForm] = useState({ name: '', description: '', famousFood: '', famousPlaces: '', artCultureTradition: '', images: [] });
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchPendingVendors();
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states`);
      setStates(res.data);
    } catch (err) {
      console.error("Error fetching states:", err);
    }
  };

  const fetchPendingVendors = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/users/admin/pending-vendors`);
      setVendors(res.data.vendors || []);
      setLoading(false);
    } catch (err) {
      enqueueSnackbar("Error loading dashboard", { variant: "error" });
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/users/admin/verify-vendor/${id}`);
      enqueueSnackbar("Approved Successfully!", { variant: "success" });
      fetchPendingVendors(); 
    } catch (err) {
      enqueueSnackbar("Approval failed", { variant: "error" });
    }
  };

  const handleReject = async (id) => {
    if (window.confirm("Are you sure you want to reject this request?")) {
        try {
            // ⭐ URL check karein: backend port 8080 hai na?
            const url = `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/users/admin/reject-vendor/${id}`;
            
            // Method PUT use karein kyunki hum user delete nahi, update kar rahe hain
            await axios.put(url);
            
            enqueueSnackbar("Request Rejected!", { variant: "warning" });
            fetchPendingVendors(); // List refresh karne ke liye
        } catch (err) {
            console.error("Reject Error:", err);
            // Notistack fix taaki snackbar crash na ho
            const msg = err.response?.data?.message || "Failed to reject vendor";
            enqueueSnackbar(msg, { variant: "error" });
        }
    }
};

  const handleStateSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', stateForm.name);
    formData.append('description', stateForm.description);
    formData.append('famousFood', stateForm.famousFood);
    formData.append('famousPlaces', stateForm.famousPlaces);
    formData.append('artCultureTradition', stateForm.artCultureTradition);
    stateForm.images.forEach(img => formData.append('images', img));

    try {
      if (editingState) {
        await axios.put(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states/${editingState._id}`, formData, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        enqueueSnackbar("State updated!", { variant: "success" });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states`, formData, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        enqueueSnackbar("State added!", { variant: "success" });
      }
      setStateForm({ name: '', description: '', famousFood: '', famousPlaces: '', artCultureTradition: '', images: [] });
      setShowStateForm(false);
      setEditingState(null);
      fetchStates();
    } catch (err) {
      enqueueSnackbar("Error saving state", { variant: "error" });
    }
  };

  const handleDeleteState = async (id) => {
    if (window.confirm("Delete this state?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/states/${id}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        enqueueSnackbar("State deleted!", { variant: "success" });
        fetchStates();
      } catch (err) {
        enqueueSnackbar("Error deleting state", { variant: "error" });
      }
    }
  };

  if (loading) return <div className="admin-loader-container"><div className="spinner"></div></div>;

  return (
    <div className="admin-dashboard-wrapper">
      <header className="admin-dashboard-header">
        <div className="header-text">
          <h1>Admin Management</h1>
          <p>Verify vendors/teachers and manage states.</p>
        </div>
        <div className="header-date">
          <FaCalendarAlt /> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </header>

      <div className="admin-tabs">
        <button className={activeTab === 'vendors' ? 'active' : ''} onClick={() => setActiveTab('vendors')}>
          <FaUserCheck /> Vendors
        </button>
        <button className={activeTab === 'states' ? 'active' : ''} onClick={() => setActiveTab('states')}>
          <FaMap /> States
        </button>
      </div>

      {activeTab === 'vendors' && (
        <>
          <div className="stats-grid">
            <div className="stat-card pending">
              <div className="stat-icon"><FaHourglassHalf /></div>
              <div className="stat-info">
                <h3>{vendors.length}</h3>
                <p>Pending Requests</p>
              </div>
            </div>
          </div>

          <div className="admin-table-section">
            <div className="table-header"><h2><FaUserCheck /> Onboarding Requests</h2></div>
            <div className="admin-table-responsive">
              <table className="modern-admin-table">
                <thead>
                  <tr>
                    <th>User Details</th>
                    <th>Shop/Expertise</th>
                    <th>Identity Proof</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.length > 0 ? vendors.map((v) => (
                    <tr key={v._id}>
                      <td>
                        <div className="vendor-name-cell">
                          <div className="avatar-circle">{v.firstName.charAt(0)}</div>
                          <div>
                            <div className="full-name">{v.firstName} {v.lastName}</div>
                            <div className="sub-text">Role: {v.role}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="shop-pill">{v.shopName || v.expertise || "N/A"}</span></td>
                      <td>
                        {v.documentUrl ? (
                          <a href={v.documentUrl} target="_blank" rel="noopener noreferrer" className="view-doc-btn"><FaEye /> View</a>
                        ) : <span className="no-doc-tag">No Doc</span>}
                      </td>
                      <td>
                        <div className="action-btn-group">
                          <button className="btn-approve" onClick={() => handleApprove(v._id)}><FaCheckCircle /> Approve</button>
                          <button className="btn-reject" onClick={() => handleReject(v._id)}><FaTrashAlt /> Reject</button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan="4" className="admin-empty-state">No pending requests! ✅</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'states' && (
        <div className="admin-table-section">
          <div className="table-header">
            <h2><FaMap /> State Management</h2>
            <button className="btn-add" onClick={() => setShowStateForm(true)}><FaPlus /> Add State</button>
          </div>

          {showStateForm && (
            <form onSubmit={handleStateSubmit} className="state-form">
              <input
                type="text"
                placeholder="State Name"
                value={stateForm.name}
                onChange={(e) => setStateForm({...stateForm, name: e.target.value})}
                required
              />
              <textarea
                placeholder="Description"
                value={stateForm.description}
                onChange={(e) => setStateForm({...stateForm, description: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Famous Food"
                value={stateForm.famousFood}
                onChange={(e) => setStateForm({...stateForm, famousFood: e.target.value})}
              />
              <textarea
                placeholder="Famous Places"
                value={stateForm.famousPlaces}
                onChange={(e) => setStateForm({...stateForm, famousPlaces: e.target.value})}
              />
              <textarea
                placeholder="Art, Culture & Tradition"
                value={stateForm.artCultureTradition}
                onChange={(e) => setStateForm({...stateForm, artCultureTradition: e.target.value})}
              />
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setStateForm({...stateForm, images: Array.from(e.target.files)})}
              />
              <div className="form-buttons">
                <button type="submit">{editingState ? 'Update' : 'Add'} State</button>
                <button type="button" onClick={() => {setShowStateForm(false); setEditingState(null); setStateForm({name:'',description:'',famousFood:'',famousPlaces:'',artCultureTradition:'',images:[]})}}>Cancel</button>
              </div>
            </form>
          )}

          <div className="admin-table-responsive">
            <table className="modern-admin-table">
              <thead>
                <tr>
                  <th>State Name</th>
                  <th>Description</th>
                  <th>Images</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {states.map((state) => (
                  <tr key={state._id}>
                    <td>{state.name}</td>
                    <td>{state.description.substring(0, 50)}...</td>
                    <td>{state.images.length} images</td>
                    <td>
                      <button onClick={() => {setEditingState(state); setStateForm({name:state.name, description:state.description, famousFood:state.famousFood || '', famousPlaces:state.famousPlaces || '', artCultureTradition:state.artCultureTradition || '', images:[]}); setShowStateForm(true)}}><FaEdit /></button>
                      <button onClick={() => handleDeleteState(state._id)}><FaTrashAlt /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminDashboard;