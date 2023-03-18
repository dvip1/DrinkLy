import { DataContext } from "./data";
import { useContext } from "react";
import {NavLink} from "react-router-dom"


function Categories(){
    let [data, isError, isLoading ,isFetching ,error ,refetch, linkInfo, setLinkInfo]=useContext(DataContext)

    return (
        <div className="min-h-screen">
            <div className="min-h-screen w-full bg-black grid esm:grid-cols-2 esm:gap-2 md:grid-cols-3 md:gap-4 p-6">
                <div className=" overflow-hidden relative col-span-2">
                <p className="text-3xl text-white absolute bottom-4 left-2">Martini</p>   
                    <div className="h-full w-full  hover:scale-125  transition-all" 
                    style={{backgroundImage:"url('/src/components/assets/video/images/margarita-cocktail.jpg')",
                                                      backgroundSize:"cover",
                                                      backgroundPosition:"center",
                                                      backgroundRepeat:"no-repeat"}}>
                                                   


                        </div> 
                        <div className=" hover:flex absolute h-full w-full bg-red-300 top-0 right-0 bottom-0 left-0">
                        <NavLink to="/popular" onClick={() => ((setLinkInfo(prev => ({...prev, drinkName: "Martini"})),refetch()))}>Know more</NavLink>

                        </div>
                    </div>
                 <div className=" overflow-hidden relative">
                      <p className="text-3xl text-white absolute bottom-4 left-2">Martini</p>   
                    <div className="h-full w-full  hover:scale-125  transition-all" 
                    style={{backgroundImage:"url('/src/components/assets/video/images/margarita-cocktail.jpg')",
                                                      backgroundSize:"cover",
                                                      backgroundPosition:"center",
                                                      backgroundRepeat:"no-repeat"}}>
                                                   

                        </div>
                    </div>
                 <div className=" overflow-hidden relative">
                      <p className="text-3xl text-white absolute bottom-4 left-2">Martini</p>   
                    <div className="h-full w-full  hover:scale-125  transition-all" 
                    style={{backgroundImage:"url('/src/components/assets/video/images/margarita-cocktail.jpg')",
                                                      backgroundSize:"cover",
                                                      backgroundPosition:"center",
                                                      backgroundRepeat:"no-repeat"}}>
                                                   

                        </div>
                    </div>
                 <div className=" overflow-hidden relative">
                      <p className="text-3xl text-white absolute bottom-4 left-2">Martini</p>   
                    <div className="h-full w-full  hover:scale-125  transition-all" 
                    style={{backgroundImage:"url('/src/components/assets/video/images/margarita-cocktail.jpg')",
                                                      backgroundSize:"cover",
                                                      backgroundPosition:"center",
                                                      backgroundRepeat:"no-repeat"}}>
                                                   

                        </div>
                    </div>
                 <div className=" overflow-hidden relative">
                      <p className="text-3xl text-white absolute bottom-4 left-2">Martini</p>   
                    <div className="h-full w-full  hover:scale-125  transition-all" 
                    style={{backgroundImage:"url('/src/components/assets/video/images/margarita-cocktail.jpg')",
                                                      backgroundSize:"cover",
                                                      backgroundPosition:"center",
                                                      backgroundRepeat:"no-repeat"}}>
                                                   

                        </div>
                    </div>
            </div>

        </div>
    )
}
export default Categories