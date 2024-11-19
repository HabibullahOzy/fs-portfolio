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
                        farhadhossian@gmail.com
                    </p>

                    <div className='flex space-x-4'>
                        <a href='https://github.com/fahad35'><FaGithub className='' /></a>
                        <a href='https://www.linkedin.com/in/md-fahad-hossain-768708155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin className='' /></a>
                        <a href='https://www.researchgate.net/profile/Md-Fahad-Hossain'><SiResearchgate /></a>

                    </div>
                </aside>
                {/* <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> */}

                <nav>
                    <h6 className="footer-title">Important Link</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>

                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;