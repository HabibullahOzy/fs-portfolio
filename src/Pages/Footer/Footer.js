import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';

const Footer = () => {
    return (
        <div id='contact'>
            <footer className="footer bg-black text-neutral-content p-10 justify-around">
                <aside>
                    <h1 className='text-3xl font-semibold'>Reach Me</h1>
                    <p>
                        +880 19 467 04373
                        <br />
                        fahadhossain.cs@gmail.com
                    </p>


                </aside>
                {/* <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> */}


                <div className='flex space-x-4'>
                    <a href='https://github.com/fahad35'><FaGithub className=' size-5' /></a>
                    <a href='https://www.linkedin.com/in/md-fahad-hossain-768708155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin className='size-5' /></a>
                    <a href='https://www.researchgate.net/profile/Md-Fahad-Hossain'><SiResearchgate className='size-5'/></a>
                </div>



                <nav>
                    <h6 className="footer-title">Important Link</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>

                </nav>

            </footer>
        </div>
    );
};

export default Footer;