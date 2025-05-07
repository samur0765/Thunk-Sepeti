import api from "../../utils/api";
import actionTypes from "../actionTypes";

const getRestaurants = () => {
  return async (dispatch) => {
    // Reducer'a haber ver
    dispatch({ type: actionTypes.restaurantLoading });
    // api isteği at
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: actionTypes.restaurantSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.restaurantError, payload: err.message });
      });
  };
};

export { getRestaurants };
