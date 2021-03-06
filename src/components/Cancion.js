import React from 'react'

export const Cancion = ({letra}) => {
    
    console.log(letra)
    if(letra.length === 0) return null;

    return ( 
        <>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </>
    );
}
