import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3">
                <div className="d-flex flex-column">
                    <Link to='/about'>Despre</Link>
                    <Link to='/termeni'>Termeni și condiții</Link>
                </div>
            <div className="text-center">
                &copy; Bla bla bla
            </div>
        </footer>
    );
}

export default Footer;