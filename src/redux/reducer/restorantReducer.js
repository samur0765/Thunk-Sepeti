import actionTypes from "../actionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    //Yüklenme durumu
    case actionTypes.restaurantLoading:
      return { ...state, isLoading: true };
    //Hata durumu
    case actionTypes.error:
      return { ...state, isLoading: false, error: action.payload };
    //verinin başarıyla gelme durumu
    case actionTypes.restaurantSuccess:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
