import React from "react";
import './Nav.css';
import SearchBox from './SearchBox';

function Nav() {

    
  return (
    <div className="Container">
        <h1>Buscador de Colaboradores</h1>
        <SearchBox />
    </div>
  );
}

export default Nav;
