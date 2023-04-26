import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
function Footer( )
{
    return(
        <React.Fragment>
            <footer id="footerbg" className="p-4">
                <section className='d-flex justify-content-center justify-content-lg-between'>
                    <div className='m-5 d-none d-lg-block'>
                        <span>Get connected with us on social media network</span>
                    </div>
                    <div className='p-3'>
                        <a className='icon' href=''><FaFacebook/></a>
                        <a className='icon' href=''><FaTwitter/></a>
                        <a className='icon' href=''><FaInstagram/></a>
                        <a className='icon' href=''><FaLinkedin/></a>
                        <a className='icon' href=''><FaYoutube/></a>
                    </div>
                </section>
            <div className="container p-4">
                <div className="row">
                    <div className="col-sm-4">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab exercitationem nihil culpa sunt ullam aperiam maiores eius voluptatum tempora quia, nemo esse saepe ipsum asperiores molestiae in sapiente quasi.</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>Navigation</h5>
                        <p> <a href=""></a>Home</p>
                        <p> <a href=""></a>About US</p>
                        <p> <a href=""></a>Contact US</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>Services</h5>
                        <p> <a href=""></a>Home</p>
                        <p> <a href=""></a>About US</p>
                        <p> <a href=""></a>Contact US</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>Address</h5>
                        <p>India</p>
                        <p>Kanpur Up</p>
                        <p>6388372193</p>
                    </div>

                </div>

            </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;