import React from 'react';
import { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import RenderDropdown from './component/dat';

const [ddcity, setddCity] = useState(); 
const Selectedcity = createContext();
function Appl() {
    return (
      <div>
        <Selectedcity.provider value={(ddcity, setddCity)} />

        <RenderDropdown />
      </div>
    );
}

export { Selectedcity };