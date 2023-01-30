import React, { useContext } from "react";
import style from "./Navbar.module.css";
import { CartContext } from "./../../context/ContextProvider";

const Navbar = () => {
  const { inputValue, setInputValue ,handleSearch} = useContext(CartContext);
   
  return (
    <div className={style.navbar_cont}>
      <div className={style.uppr_nav_cont}>
        <div className={style.logo}>The Indian News</div>
        <div className={style.nav_search_bar}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleSearch}
            placeholder="Search for news here..."
          />
        </div>
        <div className={style.slct_categ}>
          <select name="" id="">
            <option value="">news by category</option>
            <option value="">Select Category</option>
            <option value="">Select Category</option>
            <option value="">Select Category</option>
            <option value="">Select Category</option>
            <option value="">Select Category</option>
          </select>
        </div>
      </div>
      <nav className={style.nav}></nav>
    </div>
  );
};

export default Navbar;
