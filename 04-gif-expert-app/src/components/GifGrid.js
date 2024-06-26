import React/*, { useState, useEffect }*/ from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    //console.log(loading);
    //console.log(data);
    /*const [images, setImages] = useState([]);

    useEffect( () =>  {
        getGifs(category)
            .then(setImages);
    }, [category]);*/

    //getGifs();

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>

        {loading && <p className='animate__animated animate__flash'>Loading</p>}

        <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItem
                        key={img.id}
                        { ...img } 
                    />
                ))
            }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}