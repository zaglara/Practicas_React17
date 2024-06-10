import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    console.log(counter);

    const handleAdd = () => {
        //setCounter( (c) => c + 1 );
        setCounter (counter + 1);
    }

    const handleSubstract = () => {
        setCounter (counter - 1);
    }
    
    const handleReset = () => {
        setCounter ( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.prototype = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;