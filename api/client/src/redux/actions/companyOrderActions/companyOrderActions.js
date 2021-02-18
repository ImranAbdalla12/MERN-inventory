import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from '../types';
import axios from 'axios';
// import { tokenConfig } from "../auth-actions/tokenConfig";

export const addCompanyOrder = (order) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // send our data as a multipart/form-data instead of application/json
    const formData = new FormData();
    formData.append('orderName', order.name);
    formData.append('date', product.date);
    formData.append('orderQuantity', product.orderQuantity);
    formData.append('orderSupplier', product.orderSupplier);
    formData.append('orderCost', product.orderCost);
    formData.append('oderTax', product.oderTax);
    formData.append('supplierName', product.supplierName);
    formData.append('supplierAddress', product.supplierAddress);
    formData.append('supplierPhone', product.supplierPhone);
    formData.append('supplierEmail', product.supplierEmail);

    axios
      .post('/api/companyorder/create', formData, tokenConfig(getState))
      .then((res) => {
        let newProduct = res.data.product;
        let successMessage = res.data.message;

        dispatch(addProductSuccess(newProduct, successMessage));
        resolve(successMessage);
      })
      .catch((error) => {
        dispatch(addProductFailure(error.response));
        reject(error.response.data.message);
      });
  });
};

const addProductSuccess = (product, successMessage) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: {
      product,
      successMessage,
    },
  };
};

const addProductFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: {
      error,
    },
  };
};
