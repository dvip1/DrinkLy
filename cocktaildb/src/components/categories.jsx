import { DataContext } from "./data";
import { useContext,useRef } from "react";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
import Margarita from "../components/assets/images/margarita-cocktail.jpg";
import Martini from "../components/assets/images/martini.webp";
import Rum from "../components/assets/images/Rum.jpg";
import Gin from "../components/assets/images/gin.webp";
import Vodka from "../components/assets/images/vodka.jpg";

function Categories() {
  let [
    data,
    isError,
    isLoading,
    isFetching,
    error,
    refetch,
    linkInfo,
    setLinkInfo,
  ] = useContext(DataContext);

  //const isInView=useInView({ref:ref,threshold:0.5})

  return (
    <div className="min-h-screen">
      <div className="min-h-screen w-full bg-black grid esm:grid-cols-2 esm:gap-2 md:grid-cols-3 md:gap-4 esm:p-5 md:p-6">
        <motion.div 
       
        whileInView={{opacity:1,scale:1}}
        initial={{scale:0.3, opacity:0}}
        transition={{duration:0.40}}
        className=" overflow-hidden relative col-span-2">
          <p className="text-3xl text-white absolute bottom-4 left-2">
            Margarita
          </p>
          <div className="h-full w-full group">
            <div
              className="h-full w-full  group-hover:scale-125 group-hover:opacity-40 transition-all"
              style={{
                backgroundImage: `url(${Margarita})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="opacity-0 group-hover:opacity-100 absolute h-full w-full
                          top-0 right-0 bottom-0 left-0 overflow-hidden
                          flex justify-center items-center
                         transition-all ease-in-out"
            >
              <NavLink
                to="/popular"
                onClick={() => {
                  setLinkInfo((prev) => {
                    const newInfo = { ...prev, drinkName: "Margarita" };
                    if (newInfo && newInfo.drinkName === "Margarita") {
                      refetch();
                    }
                    return newInfo;
                  });
                }}
                className="border border-white rounded-lg text-white p-2 hover:bg-white hover:bg-opacity-30"
              >
                Know more
              </NavLink>
            </div>
          </div>
        </motion.div>
        <motion.div 
           whileInView={{opacity:1,scale:1}}
        initial={{scale:0.3, opacity:0}}
        transition={{duration:0.5}}
        className=" overflow-hidden relative">
          <p className="text-3xl text-white absolute bottom-4 left-2">
            Martini
          </p>
          <div className="h-full w-full group">
            <div
              className="h-full w-full  hover:scale-125   group-hover:scale-125 group-hover:opacity-40 transition-all"
              style={{
                backgroundImage: `url(${Martini})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="opacity-0 group-hover:opacity-100 absolute h-full w-full
                          top-0 right-0 bottom-0 left-0 overflow-hidden
                          flex justify-center items-center
                         transition-all ease-in-out"
            >
              <NavLink
                to="/popular"
                onClick={() => {
                  setLinkInfo((prev) => {
                    const newInfo = { ...prev, drinkName: "Martini" };
                    if (newInfo && newInfo.drinkName === "Martini") {
                      refetch();
                    }
                    return newInfo;
                  });
                }}
                className="border border-white rounded-lg text-white p-2 hover:bg-white hover:bg-opacity-30"
              >
                Know more
              </NavLink>
            </div>
          </div>
        </motion.div>

        <motion.div 
           whileInView={{opacity:1,scale:1}}
        initial={{scale:0.3, opacity:0}}
        transition={{duration:0.6}}
        className=" overflow-hidden relative">
          <p className="text-3xl text-white absolute bottom-4 left-2">Vodka</p>
          <div className="h-full w-full group">
            <div
              className="h-full w-full  hover:scale-125   group-hover:scale-125 group-hover:opacity-40 transition-all"
              style={{
                backgroundImage: `url(${Vodka})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="opacity-0 group-hover:opacity-100 absolute h-full w-full
                          top-0 right-0 bottom-0 left-0 overflow-hidden
                          flex justify-center items-center
                         transition-all ease-in-out"
            >
              <NavLink
                to="/popular"
                onClick={() => {
                  setLinkInfo((prev) => {
                    const newInfo = { ...prev, drinkName: "Vodka" };
                    if (newInfo && newInfo.drinkName === "Vodka") {
                      refetch();
                    }
                    return newInfo;
                  });
                }}
                className="border border-white rounded-lg text-white p-2 hover:bg-white hover:bg-opacity-30"
              >
                Know more
              </NavLink>
            </div>
          </div>
        </motion.div>

        <motion.div 
           whileInView={{opacity:1,scale:1}}
        initial={{scale:0.3, opacity:0}}
        transition={{duration:0.7}}
        className=" overflow-hidden relative">
          <p className="text-3xl text-white absolute bottom-4 left-2">Gin</p>
          <div className="h-full w-full group">
            <div
              className="h-full w-full  hover:scale-125   group-hover:scale-125 group-hover:opacity-40 transition-all"
              style={{
                backgroundImage: `url(${Gin})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="opacity-0 group-hover:opacity-100 absolute h-full w-full
                          top-0 right-0 bottom-0 left-0 overflow-hidden
                          flex justify-center items-center
                         transition-all ease-in-out"
            >
              <NavLink
                to="/popular"
                onClick={() => {
                  setLinkInfo((prev) => {
                    const newInfo = { ...prev, drinkName: "Gin" };
                    if (newInfo && newInfo.drinkName === "Gin") {
                      refetch();
                    }
                    return newInfo;
                  });
                }}
                className="border border-white rounded-lg text-white p-2 hover:bg-white hover:bg-opacity-30"
              >
                Know more
              </NavLink>
            </div>
          </div>
        </motion.div>

        <motion.div 
           whileInView={{opacity:1,scale:1}}
        initial={{scale:0.3, opacity:0}}
        transition={{duration:0.8}}
        className=" overflow-hidden relative">
          <p className="text-3xl text-white absolute bottom-4 left-2">Rum</p>
          <div className="h-full w-full group">
            <div
              className="h-full w-full  hover:scale-125   group-hover:scale-125 group-hover:opacity-40 transition-all"
              style={{
                backgroundImage: `url(${Rum})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="opacity-0 group-hover:opacity-100 absolute h-full w-full
                          top-0 right-0 bottom-0 left-0 overflow-hidden
                          flex justify-center items-center
                         transition-all ease-in-out"
            >
              <NavLink
                to="/popular"
                onClick={() => {
                  setLinkInfo((prev) => {
                    const newInfo = { ...prev, drinkName: "Rum" };
                    if (newInfo && newInfo.drinkName === "Rum") {
                      refetch();
                    }
                    return newInfo;
                  });
                }}
                className="border border-white rounded-lg text-white p-2 hover:bg-white hover:bg-opacity-30"
              >
                Know more
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Categories;
