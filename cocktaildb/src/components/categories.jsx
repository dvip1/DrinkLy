import { DataContext } from "./data";
import { useContext } from "react";
import {NavLink} from "react-router-dom"

function Categories(){
    let [data, isError, isLoading ,isFetching ,error ,refetch, linkInfo, setLinkInfo]=useContext(DataContext)

    return (
        <div className="min-h-screen">
            <div className="h-full w-full bg-black flex justify-center items-end p-6">
                <div className="h-40v esm:w-90v md:w-60v overflow-hidden"><div className="h-full w-full  hover:scale-125  transition-all" style={{backgroundImage:"url('/src/components/assets/video/images/margarita-cocktail.jpg')",
                                                      backgroundSize:"cover",
                                                      backgroundPosition:"center",
                                                      backgroundRepeat:"no-repeat"}}></div></div>
            </div>

        </div>
    )
}
export default Categories