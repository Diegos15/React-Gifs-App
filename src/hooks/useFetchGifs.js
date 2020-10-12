import { useEffect, useState } from "react";

import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category)  => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // El HOOK useEffect permite ejecutar una sola vez
    // El 2 parametro es una lista de dependencias y si lo dejo [] indica que solo 1 vez se ejecutará 
    /* 
        "Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, 
        el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados."
    */
    useEffect( ()=> {
        // Función de Helpers retorna una promesa
        getGifts( category ).then( (imgs) => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 1000);
        })
        // React Hook useEffect has a missing dependency: 'category'. Either include it or 
        //remove the dependency array  react-hooks/exhaustive-deps
        /* La solución es poner la category porque puede ser que cambie la categoria se volvería a ejecutar useEfect*/
    }, [category]);

    return state; // { data: [], loading: true} 
} 