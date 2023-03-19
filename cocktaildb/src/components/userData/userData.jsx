import { useState, useEffect } from "react";
import { createContext } from "react";

export let userDataContext = createContext();

export let UserDataProvider = (props) => {
  let [wishlistData, setWishlistData] = useState([]);
  let [cartData, setCartData] = useState(()=>{
    let cartDataFromStorage = localStorage.getItem("cartData");
    if (cartDataFromStorage) {
      return JSON.parse(cartDataFromStorage);
    } else {
    return [] }
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    const cartDataFromStorage = localStorage.getItem("cartData");
    if (cartDataFromStorage) {
      setCartData(JSON.parse(cartDataFromStorage));
    }
  }, []);

  return (
    <userDataContext.Provider
      value={[wishlistData, setWishlistData, cartData, setCartData]}
    >
      {props.children}
    </userDataContext.Provider>
  );
};
