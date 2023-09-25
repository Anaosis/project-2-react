import React from 'react';
import Layout from '../../components/layout/Layout';
import { connect } from 'react-redux';
import { removeFromFav } from '../../redux/fav/FavActions';
import { Link } from 'react-router-dom';
import '../cart/Cart.css';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

function Fav(props) {
    return(
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.favProducts.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Nu-mi mai place!</p>
                        </div>
                        {
                            props.favProducts.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <div onClick={() => props.removeFromFav({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        
                    </div>
                    : <div className="d-flex flex-column align-items-center">
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