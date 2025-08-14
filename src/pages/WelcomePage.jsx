import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../../public/images/Arrow.png';
import winImage from '../../public/images/I_will_win.png';
import timeImage from '../../public/images/time_is_the_enemy.png';
import batmanImage from '../../public/images/batman.png';
import '../css/Welcome.css';

const Hero = ({ heroData, playStatus, setPlayStatus, heroCount, setHeroCount }) => {
    return (
        <div className="welcome-page">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="button-nav">
               <Link to="/login" ><div className="button-nav-text">
                    <p>Click to Explore</p>
                    <img className="button-nav-img" src={arrow} alt="arrow" />
                </div></Link>
            </div>
            <ul>
                <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>
        </div>
    );
};

export default function WelcomePage() {
    const heroDataList = [
        { text1: "I Will Win", text2: "Nothing Can Stop Me", image: winImage },
        { text1: "Time Is The Enemy", text2: "Use It Wisely", image: timeImage },
        { text1: "Be the Hero", text2: "Like Batman", image: batmanImage },
    ];

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div 
            className="hero" 
            style={{
                backgroundImage: `url(${heroDataList[heroCount].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Hero
                heroData={heroDataList[heroCount]}
                playStatus={playStatus}
                setPlayStatus={setPlayStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
            />
        </div>
    );
}
