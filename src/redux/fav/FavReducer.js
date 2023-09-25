const initialState = {
    favProducts: []
}

export function favReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAV':
            let productInFav = false;
            const updatedFavProducts = state.favProducts.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFav = true;
                    return {
                        ...product,
                    };
                } else {
                    return product;
                }
            });

            if (!productInFav) {
                return Object.assign({}, state, {
                    favProducts: [
                        ...state.favProducts,
                        {
                            ...action.payload.product
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    favProducts: updatedFavProducts
                });
            }
        case 'REMOVE_FROM_FAV':
            const filteredFavProducts = state.favProducts.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                favProducts: filteredFavProducts
            });
        default:
            return state;
    }
}

