import * as types from "../constants/ActionType";
import _ from "lodash";

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;

      return [...state];
    case types.DELETE_PRODUCT:
      let index = _.findIndex(state, (o) => {
        return o.id === action.id;
      });
      state.splice(index, 1);
      return [...state];
    case types.ADD_PRODUCT:
      state.push(action.product);

      return [...state];
    case types.UPDATE_PRODUCT:
      index = _.findIndex(state, (o) => {
        return o.id === action.product.id;
      });
      state[index] = action.product;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
