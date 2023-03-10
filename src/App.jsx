import { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    setShowAll(true);
  };

  const buttonRef = useRef(null);

  const handleButton = () => {
    if (!showArticle) {
      setMenuItems(items);
      setShowAll(false);
    } else {
      setShowArticle(false);
      setMenuItems(items);
      setShowAll(false);
    }
  };
  const handleContent = (id) => {
    const chosenOne = menuItems.find((item) => item.id === id);
    setMenuItems([chosenOne]); // wrap the object in an array
    setShowArticle(true);
    setShowAll(false);
   
  };

  return (
    <>
  {showAll && (
        <div className="text-center w-full bg-black text-white">
          <button
            ref={buttonRef}
            className="border border-purple-500 border-b-2 p-1 m-1 hover:bg-purple-400 hover:border-white hover:text-black transition-all duration-200 ease-in-out rounded-lg  "
            onClick={handleButton}
          >
            Show All Articles
          </button>
        </div>
      )}

      <Navbar filterItems={filterItems} />

    
      <Categories />
      <Menu
        items={menuItems}
        handle={handleContent}
        showArticle={showArticle}
      />
      <Footer/>
    </>
  );
}

export default App;
