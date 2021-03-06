import React from 'react'

export const Biografia = ({biografia}) => {
    if(Object.keys(biografia).length === 0 ) return null;

    const { strArtistThumb, strGenre } = biografia;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" width="500" height="400"/>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{biografia.strBiographyEN}</p>
                <p className="card-text mt-2">
                    <a href={`https://${biografia.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook m-2"></i>
                    </a>
                    <a href={`https://${biografia.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter m-2"></i>
                    </a>
                    <a href={`${biografia.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm m-2"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
