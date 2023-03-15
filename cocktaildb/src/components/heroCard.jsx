import { NavLink } from "react-router-dom"


let HeroCard=(props)=>{
  return (
  
    <div className="">
        <div className="flex flex-col overflow-hidden">
            <img src={props.image} className="object-cover md:rounded-md"></img>
            <NavLink to={`/popular/${props.cardId}`}> <p className="text-3xl">{props.title}</p></NavLink> 
        </div>
    </div>
    
  )
}

export default HeroCard