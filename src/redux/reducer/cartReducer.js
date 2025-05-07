import actionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Yüklenme Durumu
    case actionTypes.cartLoading:
      return { ...state, isLoading: true };

    // Hata Durumu
    case actionTypes.cartError:
      return { ...state, isLoading: false, error: action.payload };

    // Başarıyla Veri Gelme Durumu
    case actionTypes.cartSuccess:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    // Eleman Ekleme Durumu
    case actionTypes.addItem:
      return {
        ...state,
        isLoading: false,
        error: null,
        cart: state.cart.concat(action.payload),
      };

    // Eleman Ekleme Durumu
    case actionTypes.updateItem:
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, cart: updatedCart };

    // Eleman Silme Durumu
    case actionTypes.deleteItem:
      const filtred = state.cart.filter((item) => item.id !== action.payload);

      return { ...state, cart: filtred };

    default:
      return state;
  }
};

export default cartReducer;
