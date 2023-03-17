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
   let detail= data.drinks.filter((drink)=>drink.idDrink===param.id)
    

console.log(detail)
    return (
        <div className="">
       {detail.map(drink=><>
    <img src={drink.strDrinkThumb} key={drink.idDrink}/>
    <p className="" key={drink.idDrink*8}>{drink.strDrink}</p>
    <p className="" key={drink.idDrink*6}>{drink.strAlcoholic}</p>
    <p className="" key={drink.idDrink*9}>{drink.strInstructions}</p>

    </>
    )
}
{data && console.log(detail)}
        </div>
    )
}

export default CardDetails