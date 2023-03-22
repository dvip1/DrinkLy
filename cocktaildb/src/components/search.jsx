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
      <div className="flex justify-center items-center h-16">
        <div className="shadow-lg flex">
          <input
          type="text"
          className=" border-[1.5px] border-r-0 border-slate-600 rounded-l-md h-8 esm:w-60v md:w-30v"
          onChange={handleChange}
          name="search"
          value={linkInfo.drinkName}
        />
        <button
          className="border-[1.5px] border-slate-800 rounded-r-md h-8 w-8 pl-[2px] bg-red-500"
          onClick={refetch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        </div>
      </div>
      <div className="grid esm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:m-2">
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
