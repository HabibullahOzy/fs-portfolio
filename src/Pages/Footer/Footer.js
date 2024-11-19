import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-neutral-content p-10 justify-around">
                <aside>
                   <h1 className='text-3xl font-semibold'>Reach Me</h1>
                    <p>
                    +880123456789
                        <br />
                        farhadhossian@gmail.com
                    </p>
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