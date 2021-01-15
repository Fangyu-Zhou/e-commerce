import {createSelector} from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hiddenCartDropDown
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)
);