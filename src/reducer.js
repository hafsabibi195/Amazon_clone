export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
        // action.item is the item that we have dispatched(in product.js)
      };

    case "REMOVE_FROM_BASKET":
      console.log("??");
      // logic for removing item from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if product exits
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in the basket remove it
        newBasket.splice(index, 1);
      } else
        console.warn(
          `Can't remove product (id: ${action.id} as it is not in basket)`
        );

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
