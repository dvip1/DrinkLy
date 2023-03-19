import { NavLink } from "react-router-dom";

let HeroCard = (props) => {
  return (
    <div className="">
      <div className="flex flex-col overflow-hidden bg-black">
        <img src={props.image} className="object-cover  rounded-xl "></img>
        <NavLink to={`/popular/${props.cardId}`}>
          {" "}
          <p className="esm:text-md d:text-3xl text-white bg-black">
            {props.title}
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroCard;
