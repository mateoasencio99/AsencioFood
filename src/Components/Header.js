
import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";
import{} from '@mui/material'
import React, { useEffect } from "react";
  
  
  
  function Header() {
  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);
    return (
      <header>
        <h2 className="logo">
          AsenFood
        </h2>
  
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">
            <p>2</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <h2 className="userName">Vetrivel Ravi</h2>
        </div>
  
        <div className="toggleMenu">
          <BarChart className="toggleIcon" />
        </div>
      </header>
    );
  }
  
  export default Header;