import { useState, useEffect } from "react";
import { createContext } from "react";

export let userDataContext = createContext();

export let UserDataProvider = (props) => {
  let [wishlistData, setWishlistData] = useState(()=>{
    let cartDataFromStorage = localStorage.getItem("wishlistData");
    if (cartDataFromStorage) {
      return JSON.parse(cartDataFromStorage);
    } else {
    return [] }
  });

  useEffect(()=>{
    localStorage.setItem("wishlistData",JSON.stringify(wishlistData))
  },[wishlistData])

 
  let cartLength=JSON.parse(localStorage.getItem("cartData")).length
 




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

 



  return (
    <userDataContext.Provider
      value={[wishlistData, setWishlistData, cartData, setCartData,cartLength]}
    >
      {props.children}
    </userDataContext.Provider>
  );
};
