import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
function Header( )
{
    return(
        <React.Fragment>
          <header className='headerbg'>
            <nav className="navbar navbar-expand-lg headerbg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to ="/AboutUs" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/Services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/Products" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs" className="nav-link">Contact Us</Link>
        </li>
      </ul>
      <div className='p-3'>
                        <a className='icon' href=''><FaFacebook/></a>
                        <a className='icon' href=''><FaTwitter/></a>
                        <a className='icon' href=''><FaInstagram/></a>
                        <a className='icon' href=''><FaLinkedin/></a>
                        <a className='icon' href=''><FaYoutube/></a>
                    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>
</React.Fragment>
    );
}

export default Header;