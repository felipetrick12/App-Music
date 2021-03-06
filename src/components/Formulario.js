import React,{ useState } from 'react'

export const Formulario = ({setInfo}) => {

    const [guardar, guardarBusqueda] = useState({
        cancion: '',
        artista: ''
    });

    const {artista,cancion} = guardar;

    const actualizarSate = (e)=> {
        guardarBusqueda({
            ...guardar,
            [e.target.name]: e.target.value
        })
    }
    const [error, setError] = useState(false);

    const handleSubmit=(e)=> {
        e.preventDefault();
        
        if(artista.trim()==='' || cancion.trim()==='' ){
            setError(true);
            return;
        }else {
            setError(false)
        }
        
        setInfo(guardar);
        
        
    }

    return (
        
        <form 
        onSubmit={handleSubmit}
        
        >
            {error? <p className="alert p-4 mt-2 text-center alert-danger mx-3" >Campos Obligatorios</p>:null}
         <div className="row mt-2">
           <div className=" col-md-6 col-sm-6">  
              <label >Artista</label>
              <input 
               type="text"
               className="form-control form-control-lg m-1"
               placeholder="Busca un Artista"
               name="artista"
               value={artista}
               onChange={actualizarSate}
               />
            </div>
    
           <div className="col-md-6 col-sm-6">   
           <label >Cancion</label>
           <input 
               type="text"
               className="form-control form-control-lg m-1"
               placeholder="Busca una cancion"
               name="cancion"
               value={cancion}
               onChange={actualizarSate}
               
               />
           </div>

           <button 
                    type="submit"
                    className="btn float-right btn-lg btn-danger mt-2"
                >
                        Buscar
            </button>

     </div>
     
               
          
       
       
       </form>
    )
}
