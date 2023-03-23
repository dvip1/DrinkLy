import { userDataContext } from "./userData/userData";
import { useContext } from "react";

let Cart = () => {
  let [wishlistData, setWishlistData, cartData, setCartData] =
    useContext(userDataContext);

  function handleClick(deleteCartIndex) {
    setCartData((prev) => {
      return prev.filter((drink) => {
        if (drink.id !== deleteCartIndex) {
          return true;
        }
      });
    });
    console.log(deleteCartIndex);
  }

  /*  
      setWishlistData(prev=>prev.filter((drink,index)=>{
        if(deleteWishlistIndex!==index){
          return true
        }
      }))*/ // understand this code and the diffrence between this and the code above and why here 
      //even without adding return filter is working its those curly braces that are making the difference
      //its just that setCartData wouldt know what to return within the curly braces so we have to add return before the filter

  return (
    <div className="grid grid-cols-6" key={cartData?.id}>
      {cartData?.map((drink) => {
        return (
          <div className="">
            <div className="">
              <img src={`${drink.image}`} className="w-[22vw]"></img>
              <p className="text-2xl text-center">{drink.name}</p>
              <button
                className="border"
                onClick={() => {
                  handleClick(drink.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
