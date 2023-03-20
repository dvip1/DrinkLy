import { userDataContext } from "./userData/userData";
import { useContext } from "react";

let Cart=()=>{
    let [wishlistData, setWishlistData, cartData, setCartData] =
    useContext(userDataContext);
    return (
        <div className="grid grid-cols-6" key={cartData.id}>
            {cartData.map((drink)=>{
                return (
                   <div className="">
                    <div className="">
                        <img src={`${drink.image}`} className="w-[22vw]"></img>
                        <p className="text-2xl text-center">{drink.name}</p>
                    </div></div> 
                )
            })}
        </div>
    )
}
export default Cart