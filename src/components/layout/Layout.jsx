import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Layout.css';

function Layout(props) {
    // Am renuntat la props-urile trimise catre Header prin Layout!
    return(
        <div className="layout">
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;