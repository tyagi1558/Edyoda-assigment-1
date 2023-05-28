import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="mai">
    <header className="header">
    <h1 class="company-name">Edyoda</h1>
    <p class="word-component">Component</p>
    <div class="v-symbol">v</div>

    <p class="word-component-1">Programs</p>
    <div class="v-symbol-1">v</div>
    <div class="search-icon">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBcjfPUp1sdmNcVzA94GY02pHb2B-d338t04aba99&s" 
    alt="Search Icon"/>
 </div>
 <div class="login-text">Log In</div>
 <div class="circle-2">
 <div class="join-now">JOIN NOW</div>

 </div>
    </header>
    </div>
  );
};

export default Header;
