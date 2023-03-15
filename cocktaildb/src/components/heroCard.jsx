import { NavLink } from "react-router-dom"


let HeroCard=(props)=>{
  return (
  <NavLink to={`/popular/${props.cardId}`}> 
    <div className="esm:w-70v md:w-20v">
        <div className="flex flex-col overflow-hidden">
            <img src={props.image} className="object-cover md:rounded-md"></img>
            <p className="text-3xl">{props.title}</p>
        </div>
    </div>
    </NavLink> 
  )
}

export default HeroCard