import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    setShowAll(true);
  };

  const buttonRef = useRef(null);

  const handleButton = () => {
    setMenuItems(items);
    setShowAll(false)
  };

  return (
    <>
      <Navbar filterItems={filterItems} />

      {showAll && (
        <div className="text-center">
          <button
            ref={buttonRef}
            className="border border-purple-500 border-b-2 p-1 m-1 hover:bg-purple-400 hover:border-black transition-all duration-200 ease-in-out rounded-lg"
            onClick={handleButton}
          >
            Show All
          </button>
        </div>
      )}

      <Categories />
      <Menu items={menuItems} />
    </>
  );
}

export default App;
