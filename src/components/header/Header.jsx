import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/UserActions';
import { ReactComponent as Heart } from '../../assets/icons/heart-15.svg';

function Header(props) {
    return(
        <header className="header">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img src={Logo} alt="CozyMe Shop" className="logo mb-2"/>
                </Link>
                <div>
                    { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5 mx-2 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/fav" className="d-flex">
                                <Heart/>
                            </Link>
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="mx-2"/>
                                <p className="ml-3 mb-0">{ props.numberOfProducts }</p>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);