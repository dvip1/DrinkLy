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
    <div className="grid grid-cols-6" key={wishlistData.id}>
      {wishlistData.map((drink) => {
        return (
          <div className="">
            <div className="">
              <img src={`${drink.image}`} className="w-[22vw]"></img>
              <p className="text-2xl text-center">{drink.name}</p>
              <button onClick={() => handleDelete(drink.id)} className="border">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Wishtlist;
