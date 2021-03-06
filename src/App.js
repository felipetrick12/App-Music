import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Biografia } from './components/Biografia';
import { Cancion } from './components/Cancion';
import { Header } from './components/Header'

export const App = () => {
  const [info, setInfo] = useState({})
  const {artista,cancion}= info;

  const [letra, setLetra] = useState('')
  const [biografia, setBiografia] = useState({})

  
  useEffect(() => {
      if(Object.keys(info)==='') return ;

      const buscarCancion=async()=> {
      const url= `https://api.lyrics.ovh/v1/${artista}/${cancion}?New%20item=`;
      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]); 

      setLetra(letra.data.lyrics)
      setBiografia(informacion.data.artists[0])
     

      }
      buscarCancion();

  }, [info,artista,cancion])


  return (
    <div>
      
      <Header 
      setInfo={setInfo}
      />

      <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <Biografia 
                  biografia={biografia}
                  />
              </div>
              <div className="col-md-6">
                  <Cancion 
                    letra={letra}
                  />
              </div>
            </div>
          </div>
    </div>
  )
}

