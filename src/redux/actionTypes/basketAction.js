import { toast } from "react-toastify";
import actionTypes from ".";
import api from "../../utils/api";

//Sepetten ürünleri alan fonksiyon
const getBasket = () => {
  return async (dispatch) => {
    //Yüklenme durumu
    dispatch({
      type: actionTypes.restaurantLoading,
    });

    //Api isetği veri gelirse success gelmeze error
    api
      .get("/cart")
      .then((res) => {
        dispatch({ type: actionTypes.cartSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.cartError, payload: err });
      });
  };
};

//Sepetteki ürünleri ekleyen fonksiyon
const addItem = (product) => {
  return async (dispatch) => {
    //sepete eklenecek ürünle alakalı verileri hazırla
    const newItem = {
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      photo: product.photo,
      amount: 1,
    };

    //Sepete eklenecek ürün için api isteği at
    api
      .post("/cart", newItem)
      .then(() => {
        dispatch({ type: actionTypes.addItem, payload: newItem });
      })
      .catch((err) => {
        toast.err(`Sepete eleman eklenirken bir hata oluştu ${err.message}`);
      });
  };
};

//Sepetteki ürünleri güncelleyen fonksiyon
const updateItem = (id, newAmount) => {
  return async (dispatch) => {
    api
      .patch(`/cart/${id}`, { amount: newAmount })
      .then((res) =>
        dispatch({ type: actionTypes.updateItem, payload: res.data }).catch(
          (err) =>
            toast.error(
              `Sepetteki ürün miktarı güncellenirken bir hata oluştu. ${err.message}`
            )
        )
      );
  };
};

//Ürünü sepetten kaldıran fonksiyon (thunk aksiyonu)
const deleteItem = (id) => {
  return async (dispatch) => {
    api
      .delete(`/cart/${id}`)
      .then(() => dispatch({ type: actionTypes.deleteItem, payload: id }))
      .catch((err) => toast.error("Bir sorun oluştu"));
  };
};

export { getBasket, addItem, updateItem, deleteItem };
