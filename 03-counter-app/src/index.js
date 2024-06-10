import React from "react";
import ReactDOM from "react-dom";
//import { createRoot } from 'react-dom/client';
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

import './index.css';

//console.log(<PrimeraApp/>);

//REACTDOM OBSOLETO DESDE REACT-17

const divRoot = document.querySelector('#root');
//ReactDOM.render( <PrimeraApp saludo='Hola soy Leiza'/>, divRoot );
ReactDOM.render( <CounterApp />, divRoot );


/*const root = createRoot(document.querySelector('#root'));
root.render(<PrimeraApp saludo='Hola soy Leiza'/>);*/
//root.render(<CounterApp value={5}/>);