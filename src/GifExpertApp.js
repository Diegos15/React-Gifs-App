import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    /*const handleAdd = () => {
        // setCategorias( [...categorias, 'Hora de aventura'] );
        setCategories( cats => ['Hora de aventura', ...cats] );
    }*/

    return (
        <>
            <h2> GifExpertApp </h2>
            <hr/>

            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={handleAdd} type="button" className="btn btn-outline-primary"> Agregar </button> */}

            <ol>
                <h2> GifGrid </h2>
                {
                    categories.map( (category, index) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp;
