import { useContext } from "react"
import { DataContext } from "./data"
import { useParams } from "react-router"
import { useEffect } from "react"
import axios from "axios"


let CardDetails=()=>{
    let [data, isError, isLoading ,isFetching ,error ,refetch, linkInfo, setLinkInfo]=useContext(DataContext)
   let param=useParams() 
   /* useEffect(
        ()=>{
            setLinkInfo({
                query:"lookup",
                drinkName:param.id,
                variable:'i'
            })
            refetch()
        },[param.id]
    )*/
   let detail= data.data.drinks.filter((drink)=>drink.idDrink===param.id)
    

console.log(detail)
    return (
        <div className="">
       {detail.map(drink=><>
    <img src={drink.strDrinkThumb} key={drink.idDrink}/>
    <p className="">{drink.strDrink}</p>
    <p className="">{drink.strAlcoholic}</p>
    <p className="">{drink.strInstructions}</p>

    </>
    )
}
{data && console.log(detail)}
        </div>
    )
}

export default CardDetails