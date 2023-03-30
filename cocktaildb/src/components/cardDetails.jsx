import { useContext } from "react";
import { DataContext } from "./data";
import { useParams } from "react-router";


let CardDetails = () => {
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
  let param = useParams();
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
  let detail = data.drinks.filter((drink) => drink.idDrink === param.id);
  let ingredients = [];
detail.map((drink) => 

  {

  for(const ingredient in drink){
   if(ingredient.startsWith("strIngredient") && drink[ingredient]){
     ingredients.push(drink[ingredient])
    }
  }
  console.log(ingredients)

}
)




  return (
    <div className="w-100v h-80v flex justify-center items-center">
    <div className="emd:w-[80vw] lg:w-[71vw]">
      {detail.map((drink) => (
        <div className="emd:flex emd:border-[1.5px] border-[#454545]  rounded-xl shadow-md overflow-hidden">
          
          <img src={drink.strDrinkThumb} key={drink.idDrink} 
          className="emd:w-[50vw] md:w-[45vw] lg:w-[30vw]"
          />
          <div className="">
          <div className="flex flex-col items-center lg:translate-x-4">
          <p className="text-4xl font-semibold" key={drink.idDrink * 8}>
            {drink.strDrink}
          </p>
          <p className="" key={drink.idDrink * 6}>
            {drink.strAlcoholic}
          </p>
          <p className="" key={drink.idDrink * 9}>
            {drink.strInstructions}
          </p>
          </div>
          <div className="flex flex-col">
            <p>Ingredients:</p>
            {ingredients.map((ingredient)=><p>{ingredient}</p>)}
          </div>
          </div>
        </div>
      ))}
      
    </div>
    </div>
  );
};

export default CardDetails;
