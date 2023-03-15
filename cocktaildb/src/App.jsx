import { useState } from "react"
import {BrowserRouter, Routes ,Route } from "react-router-dom"
import Hero from './components/Hero'
import {DataProvider} from "./components/data"
import Navbar from "./components/Navbar"
import Search from "./components/search"
import CardDetails from "./components/cardDetails"





function App() {
let [pathname,setPathname]=useState("/")
console.log(pathname)

  return (
    <div className="App">
      <DataProvider>
      <BrowserRouter>
     <div className={`${pathname=='/'?'absolute ':'relative bg-black m-0'} ${pathname=='/popular/:id'?'hidden':'block'} text-white`}><Navbar setPath={setPathname}/></div> 
      <Routes>
        <Route path="/" element={ <Hero/>}></Route>
 
       <Route path="/popular" element={<Search/>} />
       <Route path="/popular/:id" element={<CardDetails/>}/>
       
      </Routes>

     
      </BrowserRouter>
   
      </DataProvider>

    </div>
  )
}

export default App
