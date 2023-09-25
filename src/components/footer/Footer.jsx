import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="d-flex flex-column">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <Link to='/about'>Despre</Link>
                    <Link to='/termeni'>Termeni și condiții</Link>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Bla bla bla
            </div>
        </footer>
    );
}

export default Footer;