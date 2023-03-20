import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { userDataContext } from "./userData/userData";

let Card = (props) => {
  let [wishlistData, setWishlistData, cartData, setCartData] =
    useContext(userDataContext);

  let [activeColor, setActiveColor] = useState({
    colorSet: false || wishlistData.filter((drink)=>props.daata.strDrink===drink.name).length>0 ,
    cartColor:
      false ||
      cartData.filter((drink) => drink.name === props.daata.strDrink).length >0,
  });

  function WishlistHandler() {
   setActiveColor((prev) => ({
      ...prev,
      colorSet: !prev.colorSet,
    }));

    let wishlist={
      name:props.daata.strDrink,
      image:props.daata.strDrinkThumb,
      id:props.daata.idDrink

    }

     let isAddedTOWishlist=wishlistData.filter(drink=>props.daata.strDrink===drink.name).length>0
     let deleteWishlistIndex=wishlistData.findIndex(drink=>props.daata.strDrink===drink.name)
     if(!isAddedTOWishlist){
      setWishlistData((prev)=>[...prev, wishlist])
     }else{
      
      setWishlistData(prev=>prev.filter((drink,index)=>{
        if(deleteWishlistIndex!==index){
          return true
        }
      }))
     }

   

    
  }

  function CartHandler() {
    setActiveColor((prev) => ({
      ...prev,
      cartColor: !prev.cartColor,
    }));

    let Cart = {
      name: props.daata.strDrink,
      image: props.daata.strDrinkThumb,
      id:props.daata.idDrink*2 //this is done to make the id unique because the id of the drink in cart and wishlist is same
    };
    let isAddedToCart =
      cartData.filter((drink) => drink.name === props.daata.strDrink).length >
      0; //length>0 is important here because filter returns an array and if the array is empty then it will return false so that means the drink is not added to cart
    if (!isAddedToCart) {
      setCartData((prev) => [...prev, Cart]);
    } else {
      let deleteDrinkIndex = cartData.findIndex(
        (drink) => drink.name === props.daata.strDrink
      );
      console.log(deleteDrinkIndex);

      setCartData((prevCartData) =>
        prevCartData.filter((drink, index) => {
          if (index !== deleteDrinkIndex) {
            return true; //here return true is important because if we don't return anything then it will return undefined and that will be added to the array
          }
        })
      );

      console.log(cartData);
    }
  }

  return (
    <>
      <div className="">
        <div className="flex flex-col overflow-hidden relative">
          <div className="absolute top-1 right-1 flex text-white z-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={`${activeColor.colorSet ? "currentColor" : "none"}`}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 hover:text-red-600 m-1 ${
                activeColor.colorSet ? "text-red-600" : ""
              } `}
              onClick={WishlistHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={`${activeColor.cartColor ? "currentColor" : "none"}`}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 hover:text-blue-600 m-1 ${
                activeColor.cartColor ? "text-blue-600" : ""
              } `}
              onClick={CartHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <NavLink to={`/popular/${props.cardId}`}>
            <img src={props.image} className="object-cover md:rounded-md"></img>
            <p className="text-3xl text-center">{props.title}</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
