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
    <div
      className=" md:grid md:grid-cols-2 lg:grid-cols-3 emd:grid-cols-2  esm:grid-cols-1 justify-center items-center"
      key={wishlistData.id}
    >
      {wishlistData.map((drink) => {
        return (
          <div className="">
            <div
              className="  flex md:justify-evenly  esm:justify-between
             esm:pl-3 m-4 border-[1px] border-[#858585] rounded-lg p-3 pl-0 shadow-sm hover:shadow "
            >
              <img src={`${drink.image}`} className="w-[22vw] rounded-lg"></img>
              <div className="flex flex-col esm:justify-between md:justify-start lg:justify-center items-center">
                <p className="text-2xl text-center">{drink.name}</p>
                <p className="">{drink.price}$</p>
                <button
                  onClick={() => handleDelete(drink.id)}
                  className="bg-[#d84848] text-white rounded-lg p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
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
