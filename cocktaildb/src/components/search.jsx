import { DataContext } from "./data";
import { useContext } from "react";
import Card from "./card";

function Search() {
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

  function handleChange(e) {
    e.preventDefault();
    let value = e.target.value;
    setLinkInfo((prev) => ({ ...prev, query: "search", drinkName: value }));
  }

  // console.log({isLoading, isFetching})

  if (isLoading || isFetching) return <p>Loading please wait...</p>;
  else if (isError)
    return console.error(
      "There was some error loading the data" + error.message
    );

  return (
    <div className="">
      <div className="flex">
        <input
          type="text"
          className="border border-black"
          onChange={handleChange}
          name="search"
          value={linkInfo.drinkName}
        />
        <button className="border border-black" onClick={refetch}>
          Search
        </button>
      </div>
      <div className="grid esm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {!isError && data?.drinks ? (
          data.drinks.map((drink, index) => (
            <Card
              daata={drink}
              image={drink.strDrinkThumb}
              title={drink.strDrink}
              key={drink.idDrink}
              cardId={drink.idDrink}
              index={index}
            />
          ))
        ) : (
          <div className="p-4">
            <p className="text-2xl">Please search a valid Drink name</p>
            <p className="text-xl text-yellow-500">Suggestions:</p>
            <ul className="">
              <li>Tequila</li>
              <li>Martini</li>
              <li>Gin</li>
              <li>Brandy</li>
              <li>Cocktail</li>
              <li>Lassi</li>
              <li>Margarita</li>
              <li>Rum</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
