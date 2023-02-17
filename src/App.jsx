import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <>
      <Navbar />
      <Categories />

      <Menu items={menuItems} />
    </>
  );
}

export default App;
