import React from "react";
import { Link } from "react-router-dom";
import "./styling/menu.css";
import logo from './assets/logo.svg';

function Menu() {

  return (

    <div className='mainWrapper' id="mainMenuWrapper">

      <div className="outerBox" id="menuBox">

      <div className="logoBox">
      <img src={logo} alt="INNER"></img>
      <p><span className="blue">EV</span> Battery Scanner</p>
      </div>

      <div className="menuButtons">
        <Link to='/worklists'>
        <button>Takenlijst</button>
        </Link>
        <Link to='/reports'>
        <button>Rapportages</button>
        </Link>
        <button>Accu Toevoegen</button>
        <button>Instellingen</button>
        <button>Hulp</button>
      </div>

      </div>

    </div>
  );
}

export default Menu;
