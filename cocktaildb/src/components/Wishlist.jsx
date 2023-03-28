import { userDataContext } from "./userData/userData";
import { useContext } from "react";

let Wishtlist = () => {
  let [wishlistData, setWishlistData, cartData, setCartData] =
    useContext(userDataContext);

  let handleDelete = (deleteWishlistId) => {
    setWishlistData((prev) =>
      prev.filter((drink) => {
        if (drink.id !== deleteWishlistId) {
          return true;
        }
      })
    );
  };

  return (
    <div className=" md:grid md:grid-cols-2  esm:grid-cols-1 justify-center items-center" key={wishlistData.id}>
      {wishlistData.map((drink) => {
        return (
          <div className="">
            <div className="  flex md:justify-evenly  esm:justify-between esm:pl-3 m-4 border-2 rounded-lg p-3 pl-0 relative">
              <img src={`${drink.image}`} className="w-[22vw] rounded-lg"></img>
             <div className="flex flex-col esm:justify-between md:justify-start items-center">
              <p className="text-2xl text-center">{drink.name}</p>
              <p className="">{drink.price}$</p>
              <button onClick={() => handleDelete(drink.id)} className="border">
                Delete
              </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Wishtlist;
