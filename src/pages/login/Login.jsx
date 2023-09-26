import React from 'react';
import { Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUser, loginUser2 } from '../../redux/user/UserActions';

class Login extends React.Component {

    render() {
        return(
            <div className="login-page">
                
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-2"/>
                </Link>
                <p className="mb-4"><small>(Pentru a reveni la pagina principala, click logo)</small></p>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
                <button
                    className="btn btn-outline-dark d-flex align-items-center mt-2"
                    onClick={() => this.props.signInWithFacebook()}
                >
                    <Facebook className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Facebook</span>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInWithGoogle: () => dispatch(loginUser()),
        signInWithFacebook: () => dispatch(loginUser2())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);