import React, { useState } from 'react'
// import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    // const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    // cambiamos la varible por images
    const { data: images, loading} = useFetchGifs(category);
    
    return (
        <>
            <hr/>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            {/* Doble ampersan condición logica and, validación corta */}
            { loading &&  <p className="animate__animated animate__flash"> Loading... </p>}
            <div className="card-grid">
                    {
                        // Desestructuración
                        images.map( (img) => (
                            // Otra manera de desestructuración: {...img} ----> {id, title, url}
                            <GifGridItem key={img.id} img={img} count={count}/>
                        ))
                    }
                    <button type="button" className="btn btn-danger btn-lg btn-block" 
                    onClick={ () => { setCount( count+1 ) } }>Click</button>
                    
            </div>
        </>
    )
}
