import React from 'react';
import './AboutPage.css';  // Import the updated styles
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>{t("Welcome to Darshan-E-Bharat")}</h1>
        <p>{t("Explore India's Rich Cultural Heritage")}</p>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <h2>{t("Discover India's Culture")}</h2>
        <p>{t("India is a land of diverse traditions, art forms, and rich history. Our platform brings the beauty of Indian culture to your fingertips, making it easy for you to explore, learn, and engage.")}</p>
        <div className="image-gallery">
          <img src="/assets/about_imgs/culture1.jpg" alt="Culture 1" />
          <img src="/assets/about_imgs/culture2.jpg" alt="Culture 2" />
          <img src="/assets/about_imgs/culture3.jpg" alt="Culture 3" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>{t("Our Mission")}</h2>
        <p>{t("At Darshan-E-Bharat, we aim to make India's vibrant culture accessible to the world. Our mission is to:")}</p>
        <div className="mission-cards">
          <div className="mission-card">
            <img src="/assets/about_imgs/handcrafts-icon.jpg" alt="Handicrafts" />
            <h3>{t("Empower Tribal Artisans")}</h3>
            <p>{t("We provide a platform for tribal artists to sell their handcrafted items directly to the world, promoting fair trade and economic independence.")}</p>
          </div>
          <div className="mission-card">
            <img src="/assets/about_imgs/education-icon.jpg" alt="Education" />
            <h3>{t("Preserve Traditional Arts")}</h3>
            <p>{t("We offer courses to preserve and pass on traditional art forms, ensuring future generations have access to these valuable skills.")}</p>
          </div>
          <div className="mission-card">
            <img src="/assets/about_imgs/cultural-icon.jpg" alt="Culture" />
            <h3>{t("Promote Cultural Awareness")}</h3>
            <p>{t("Our platform promotes awareness and appreciation of Indian culture by showcasing various art forms, music, dance, and history from different regions of India.")}</p>
          </div>
        </div>
        <a href="/courses" className="mission-btn">{t("Start Exploring")}</a>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>{t("Meet Our Team")}</h2>
        <div className="team-members">
          {/* Team Member 1 */}
          <div className="team-member">
            <img src="/assets/r.jpg" alt="Ruchi" />
            <h3>Ruchi Thakur</h3>
            <p>{t("Web Developer")}</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img src="/assets/sneha.jpg" alt="Sneha" />
            <h3>Sneha Sahu</h3>
            <p>{t("Frontend Developer")}</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <img src="/assets/shubhanshri.jpg" alt="Shubh" />
            <h3>Shubhanshri Gedam</h3>
            <p>{t("AI Developer")}</p>
          </div>

          {/* Team Member 4 */}
          <div className="team-member">
            <img src="/assets/shreshth.jpg" alt="Shreshth" />
            <h3>Shreshth Tiwari</h3>
            <p>{t("Marketing Manager")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
