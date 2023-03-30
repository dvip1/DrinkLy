import { DataContext } from "./data";
import { useContext } from "react";
import  Card  from "./card";

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

  if (isLoading || isFetching)
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p>Loading please wait...</p>
          <div className="w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                marginRight: "auto",
                background: "rgb(255,255,255)",
                display: "block",
                shapeRendering: "auto",
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle cx="30" cy="50" fill="#e90c59" r="20">
                <animate
                  attributeName="cx"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.5;1"
                  values="30;70;30"
                  begin="-0.5s"
                ></animate>
              </circle>
              <circle cx="70" cy="50" fill="#46dff0" r="20">
                <animate
                  attributeName="cx"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.5;1"
                  values="30;70;30"
                  begin="0s"
                ></animate>
              </circle>
              <circle cx="30" cy="50" fill="#e90c59" r="20">
                <animate
                  attributeName="cx"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.5;1"
                  values="30;70;30"
                  begin="-0.5s"
                ></animate>
                <animate
                  attributeName="fill-opacity"
                  values="0;0;1;1"
                  calcMode="discrete"
                  keyTimes="0;0.499;0.5;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animate>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    );
  else if (isError)
    return console.error(
      "There was some error loading the data" + error.message
    );


  return (
    <div className="bg-[#3e3e42] text-white min-h-screen ">
      <div className="flex justify-center items-center h-16">
        <div className="shadow-lg flex">
          <input
            type="text"
            className=" border-[1.5px] border-r-0 border-slate-600 rounded-l-md h-8 esm:w-60v md:w-30v text-black"
            onChange={handleChange}
            name="search"
            value={linkInfo.drinkName}
          />
          <button
            className="border-[1.5px] border-slate-800 rounded-r-md h-8 w-8 pl-[2px] bg-[#d91923]"
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
      <div className="grid esm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:m-2 md:mb-0">
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
