import React from 'react';
import "./Banner.css"
import img from "../assets/rectangle-11-1.png";

const Banner = () => {
    return (
        <div className="intro-section">



            <div className=' lg:flex lg:flex-row-reverse md:grid sm:grid'>

                <div className="image-section lg:w-1/2 ">

                    
                <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                        <div className="bubble bubble4"></div>
                        <div className="bubble bubble5"></div>
                    
                    <img src={img} alt="Fahad Hossain" className="profile-pic m-auto" />
                    {/* <div className="background-effect"></div> */}
                </div>

                <div className="text-section lg:w-1/2 z-10">
                    <h1>Hi, I'm <span className="highlight">Fahad!</span></h1>
                    <p>
                        I'm Md. Fahad Hossain, a dedicated Natural Language Processing (NLP) Researcher,
                        with a strong background in Speech Recognition, Computer Vision, and Software Engineering.
                        Passionate about building intelligent systems and developing innovative solutions for complex problems.
                    </p>
                    <div className="buttons">
                        <button className="btn contact-btn">Get In Touch</button>
                        <button className="btn resume-btn">Download Resume</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;