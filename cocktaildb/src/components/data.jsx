import axios from "axios"
import {useQuery} from "react-query"
import { createContext, useState } from "react"


export const DataContext=createContext();

export let DataProvider=(props)=>{

    let [linkInfo, setLinkInfo]=useState({
        query:'search',
        drinkName:'Cocktail',
        variable:'s'
    })

async function getData(){
 let response;
 response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${linkInfo.query}.php?${linkInfo.variable}=${linkInfo.drinkName}`)
//response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lassi`)

return response.data
}

let {data, isLoading , error , isError, isFetching , refetch}=useQuery('cocktails',getData , {
    staleTime:300000 ,//this means that the data will be fetched again after 5 minutes so even if you change the tabs the data will be fetched again after 5 minutes only
   enabled:true //if set to false it would mean that the query will be enabled only when the user clicks on the search button
})



return (
<DataContext.Provider value={[data, isError, isLoading ,isFetching, error ,refetch, linkInfo,setLinkInfo]}>
    {props.children}
    
</DataContext.Provider>
    )
}

