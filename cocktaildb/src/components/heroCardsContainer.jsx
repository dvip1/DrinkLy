import { DataContext } from "./data"
import { useContext } from "react"
import HeroCard from "./heroCard"

function HeroCardsContainer(){
     let [data, isError, isLoading ,isFetching ,error ,refetch, linkInfo, setLinkInfo]=useContext(DataContext)
    return (
        <div className="flex overflow-scroll min-h-screen justify-center items-center">
            {data && data.data.drinks.map(drink=><div className="w-30v"><HeroCard image={drink.strDrinkThumb} title={drink.strDrink} key={drink.idDrink} cardId={drink.idDrink}/></div>)}
        </div>
    )
}

export default HeroCardsContainer
