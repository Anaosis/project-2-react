import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFav } from '../../redux/fav/FavActions';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartOn } from '../../assets/icons/heart-on.svg';
import { removeFromFav } from '../../redux/fav/FavActions';
import {Link} from 'react-router-dom';

function ProductItem(props) {
    const { name, price, currency, image, id, favProducts } = props;

    // Check if the product is in the favorites list
    const isFavorited = favProducts.some(product => product.id === id);

    return (
        <div className="product-item col-12 col-md-4 d-flex flex-column align-items-center mb-3">
            <Link to={`/product/${id}`}>
            <img src={image} alt="productPhoto" className="mb-2" />
            <p className="mb-1 text-center">{name}</p>
            <p className="text-center">{price + currency}</p>
            </Link>
            {isFavorited ? (
                <button
                    className="mic2 btn bg-transparent btn-outline-none"
                    onClick={() => props.removeFromFav({ id })}
                >
                    <HeartOn className="mic" />
                </button>
            ) : (
                <button
                    className="mic2 btn bg-transparent btn-outline-none"
                    onClick={() =>
                        props.addToFav({
                            product: {
                                id,
                                name,
                                price,
                                currency,
                                image,
                            },
                        })
                    }
                >
                    <Heart className="mic" />
                </button>
            )}

            <br />
            <button
                className="btn btn-outline-dark"
                onClick={() =>
                    props.addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image,
                        },
                    })
                }
            >
                Adaugă în coș
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        favProducts: state.fav.favProducts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFav: (product) => dispatch(addToFav(product)),
        removeFromFav: (payload) => dispatch(removeFromFav(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
