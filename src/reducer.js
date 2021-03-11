// This file is used for the manipulation of the initalState of the app
// Reducer is used for pushing data/actions into the data layer
export const initialState = {
  basket: [],
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
  }
};

export default reducer;
