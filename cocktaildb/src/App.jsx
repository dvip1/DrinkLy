import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import { DataProvider } from "./components/data";
import Navbar from "./components/Navbar";
import Search from "./components/search";
import CardDetails from "./components/cardDetails";
import { UserDataProvider } from "./components/userData/userData";
import Cart from "./components/cart";
import Wishtlist from "./components/Wishlist";
import AboutUs from "./components/AboutUs";

function App() {
  let [pathname, setPathname] = useState("/");
  console.log(pathname);

  return (
    <div className="App">
      <DataProvider>
        <UserDataProvider>
          <BrowserRouter>
            <div
              className={`${
                pathname == "/" ? "absolute " : "relative bg-black m-0"
              } ${pathname == "/popular/:id" ? "hidden" : "block"} text-white`}
            >
              <Navbar setPath={setPathname} />
            </div>
            <Routes>
              <Route path="/" element={<Hero />}></Route>

              <Route path="/popular" element={<Search />} />
              <Route path="/popular/:id" element={<CardDetails />} />
              <Route path="/fav" element={<Wishtlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
        </UserDataProvider>
      </DataProvider>
    </div>
  );
}

export default App;
