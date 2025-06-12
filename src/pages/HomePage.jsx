import React from 'react'; //importing everything
import { useState, useEffect } from 'react'; // to hold the state of changing profile picture per say


const HomePage = ({ setCurrentPage }) => {
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
    
    const fetchProfilePic = async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('https://raw.githubusercontent.com/molomojc/Portfolio/main/Personn.png');
          }, 1500);
        });
      };

    return (
        <div className="home-container">
            <div className="home-details">
                <h1 className="name">I AM <span className="name-highlight">JACOB MOLOMO</span></h1>
                <p className="description">ASPIRING SOFTWARE ENGINEER | DATA SCIENTIST</p>
                <p className="description2">BSc in Mathematical Sciences in Applied Maths & Computer Science</p>
                <button
                    className="talk-button"
                    onClick={() => setCurrentPage('about_me')}
                >
                    More About Me
                </button>
                <h1 className="notice">Please Note this web is still in production</h1>
            </div>
            <div className="profile-container">
                {isLoading ? (
                    <p className="loading-text">Loading Profile Picture...</p>
                ) : error ? (
                    <p className="error-text">{error}</p>
                ) : (
                    <img src={profilePic} alt="Profile" className="profile-pic" onError={(e) => e.target.src='https://placehold.co/600x400/ef4444/ffffff?text=Error+Loading&font=montserrat'} />
                )}
            </div>
        </div>
    );
};

export default HomePage;