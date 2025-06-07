// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { fetchProfilePic } from '../utils/helpers'; 

const HomePage = ({ setCurrentPage }) => { // Added setCurrentPage prop
    const [profilePic, setProfilePic] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProfilePic = async () => {
            try {
                setLoading(true);
                const url = await fetchProfilePic();
                setProfilePic(url);
                setError(null);
            } catch (err) { 
                setError('Failed to load this Image');
                console.error("Error fetching profile pic:", err);
            } finally {
                setLoading(false);
            }
        };
        getProfilePic();
    }, []);
    
    const handleMoreAboutMeClick = () => {
        setCurrentPage('about_me'); // Navigate to AboutMePage
    };

    return (
        <div className="home-container animate-fadeIn"> 
            <div className="Home-details">
                <h1 className="name">I AM <span className="name-highlight">JACOB MOLOMO</span></h1>
                <p className="description">ASPIRING SOFTWARE ENGINEER |  DATA SCIENTIST 
                    <br/>
                </p>
                <p className="description2">BSc in Mathematical Sciences in Applied Maths & Computer Science</p>
                <button 
                    className="talk" 
                    onClick={handleMoreAboutMeClick} // Use the new handler
                >
                    More About Me
                </button>
                <h1 className="notice">Please Note this web is still in production</h1>
            </div>
            <div className="profile">
                {isLoading ? (
                    <p className="text-white text-center py-10">Loading Profile Picture...</p>
                ) : error ? (
                    <p className="text-red-400 text-center py-10">{error}</p>
                ) : (
                    <img 
                        src={profilePic} 
                        alt="Profile" 
                        className="profile-pic" 
                        onError={(e) => {
                            e.target.onerror = null; // Prevents looping if placeholder also fails
                            e.target.src='https://placehold.co/600x400/ef4444/ffffff?text=Error+Loading&font=montserrat';
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default HomePage;
