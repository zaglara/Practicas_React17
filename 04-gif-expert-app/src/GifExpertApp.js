import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//import PropTypes from 'prop-types';

const GiftExpertApp = () => {

    //const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man']);
    
    /*const handleAdd = () => {
        console.log('click');
        setCategories(categories.concat('Ironman'));
        //setCategories([...categories, 'Ironman']);
        //setCategories(cats => [...cats, 'Ironman']);
    }*/
    
    return (
        <>
            <h2>GiftExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr/>

            {/*<button onClick={handleAdd}>Agrear</button>*/}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;