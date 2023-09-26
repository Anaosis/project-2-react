import React from 'react';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router-dom';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFav } from '../../redux/fav/FavActions';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartOn } from '../../assets/icons/heart-on.svg';
import { removeFromFav } from '../../redux/fav/FavActions';

function Product(props) {
  const { id } = useParams();

  function findProductById(productId) {
    for (const category of Object.values(products)) {
      const product = category.items.find(item => String(item.id) === productId);
      if (product) {
        return product;
      }
    }
    return null;
  }

  const currentProduct = findProductById(id);
  console.log('currentProduct:', currentProduct);

  if (currentProduct) {
    const {id: newId, name, price, currency, image, size, colour, material, brand, description } = currentProduct;
    const isFavorited = props.favProducts.some(product => product.id === newId);

    return (
      <Layout>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <div className="brown">
            <img src={image} alt="Poza cu ce-o fi asta" className="m-3 bb"/>
          </div>
          <div className="p-5">
            <div className="d-inline-flex">
              <h2>{name}</h2>
              {isFavorited ? (
                <button
                  className="mic2 btn bg-transparent btn-outline-none"
                  onClick={() => props.removeFromFav({ id: newId })}
                >
                  <HeartOn className="mic3"/>
                </button>
              ) : (
                <button
                  className="mic2 btn bg-transparent btn-outline-none"
                  onClick={() =>
                    props.addToFav(
                      {
                        product: {
                          id: newId,
                          name,
                          price,
                          currency,
                          image,
                        }
                      }
                    )
                  }
                >
                  <Heart className="mic3"/>
                </button>
              )}
            </div>
            <p>Price: {price} {currency}</p>
            <p>Size: {size}</p>
            <p>Color: {colour}</p>
            <p>Material: {material}</p>
            <p>Brand: {brand}</p>
            <p>Description:</p>
            <p> {description}</p>
            <button
              className="btn btn-outline-dark"
              onClick={() =>
                props.addToCart(
                  {
                    product: {
                      id: newId,
                      name,
                      price,
                      currency,
                      image,
                    }
                  }
                  )
              }
              >
              Adaugă în coș
            </button>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p>Product not found.</p>
      </Layout>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
