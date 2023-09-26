import React from 'react';
import Layout from '../../components/layout/Layout';
import { connect } from 'react-redux';
import { removeFromFav } from '../../redux/fav/FavActions';
import { Link } from 'react-router-dom';
import '../cart/Cart.css';
import './Fav.css';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

function Fav(props) {
    return(
        <Layout>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center p-5">
                {
                    props.favProducts.length
                    ?
                            props.favProducts.map(product => {
                                return<div className="fav size m-3 d-flex flex-column flex-wrap justify-content-center align-items-center">
                                    <Link to={`/product/${product.id}`}>
                                        <img className="fav-img-top m-2" src={product.image} alt="Produs"/> </Link>
                                        <div className="fav-body">
                                        <Link to={`/product/${product.id}`}> <h5 className="fav-title">{ product.name }</h5> </Link>
                                            <div  className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                                                <h6>{ product.price } { product.currency }</h6>
                                                <p>Nu-mi mai place!</p>
                                                <div onClick={() => props.removeFromFav({id: product.id})}>
                                                    <Close />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                            })
                    : 
                    <div className="centered  mai">
                        <p className="h3">Nu ai produse favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        favProducts: state.fav.favProducts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFav: (payload) => dispatch(removeFromFav(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fav);