import * as types from "../constants/ActionType";
import callApi from "../utils/apiCaller";

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("product", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`product/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(res.data.id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi("product", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};

export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`product/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`product/${product.id}`, "PUT", product).then((res) => {
      dispatch(actUpdateProduct(res.data));
    });
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};
