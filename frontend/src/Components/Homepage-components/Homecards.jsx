import React from 'react'
import "./HomeCard.css"
import quizimage from '../../assets/quiz.png'
import courceimage from '../../assets/Kerala-Mural 1.png'
import marketimage from '../../assets/handicraft_clg 1.png'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Homecards() {
    const { t } = useTranslation();

    const card_Data = [
        {
            "title": t("Quiz..."),
            "id": "quiz",
            "heading": t("🎯 Quiz & Puzzle Arena – Play, Learn & Win! 🏆"),
            "description": t("Dive into a world of exciting challenges that celebrate India's rich culture and heritage! Engage in interactive quizzes and mind-bending puzzles designed to test your knowledge while keeping the fun alive. Win coins, badges, and exclusive rewards as you explore the diverse traditions, art forms, and history of India. Every challenge brings you closer to becoming a true cultural champion! 🚀"),
            "img": quizimage,
            "link": "./quizcard",
            "button": t("Let's Start"),
            "flexDirection": "row"
        },
        {
            "title": t("Courses..."),
            "id": "cource",
            "heading": t("🎯 Learn from the Masters: Explore India's Timeless Art, Dance & Music Online!"),
            "description": t("Immerse yourself in the vibrant heritage of India by enrolling in expert-led courses on traditional arts 🎭, crafts, dance 💃, and music 🎶. Learn from master artisans and renowned performers, refine your skills, and keep India's cultural legacy alive—all while earning rewards that unlock even more enriching experiences!"),
            "img": courceimage,
            "link": "/courses",
            "button": t("Let's Explore"),
            "flexDirection": "row-reverse"

        },
        {
            "title": t("Market Place..."),
            "id": "marketplace",
            "heading": t("Shop 🛍️ UniqueHandmade Items from India 🇮🇳"),
            "description": t("Step into our vibrant online marketplace, where tradition meets craftsmanship! Explore a curated collection of authentic handcrafted items, created by skilled tribal artists from across India. Every purchase not only brings home a piece of India's rich cultural heritage but also directly supports the artisans, empowering them to sustain their craft and livelihoods."),
            "img": marketimage,
            "link": "/marketplace",
            "button": t("Let's Explore"),
            "flexDirection": "row"

        }
    ];

    return (
        <div className='features-container'>
            {
                card_Data.map((features, index) => (
                    <div className='features-card' id={features.id}>
                        <h1 className='feature-head'>{features.title}</h1>
                        <div className='feature-description' style={{ flexDirection: `${features.flexDirection}` }}>
                            <div className='descriptions'>
                                <h1>{features.heading}</h1>
                                <p>{features.description}</p>
                                <Link to={features.link}><button className='feature-button'>{features.button}</button></Link>
                            </div>
                            <div className='feature-image' style={{ backgroundImage: `url(${features.img})` }}></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Homecards