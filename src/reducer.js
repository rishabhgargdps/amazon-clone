// This file is used for the manipulation of the initalState of the app
// Reducer is used for pushing data/actions into the data layer
export const initialState = {
  basket: [],
  user: null,
};

// total calculator using reduce function
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
        // basket: state.basket.filter((item) => item.id !== action.id),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
