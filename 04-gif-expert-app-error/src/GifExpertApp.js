import React, {useState} from "react";
//import PropTypes from 'prop-types';

const GiftExpertApp = () => {

    //const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man', 'Samurai X', 'Dragon Ball']);
    
    const handleAdd = () => {
        console.log('click');
        setCategories(categories + categories.push('Ironman'));
    }
    
    return (
        <>
            <h2>GiftExpertAppppp</h2>
            <hr/>

            <button onClick={handleAdd}>Agrear</button>

            <ol>
                {
                    categories.map( category =>{
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;