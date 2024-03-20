import {React, Container} from 'react';
import logo from './logo_transparent.png';

function Footer() {
  return (
  
      <footer className="footer-content">
<img src={logo} alt="TrackApp logo" className="logo" />
        <p className="footertext">&copy; 2024 TrackApp. All rights reserved.</p></footer>
  );
}

export default Footer;