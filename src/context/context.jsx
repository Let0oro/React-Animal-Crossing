import { createContext, useState, useEffect } from "react";

export const ACContext = createContext();

export const ACContextProvider  = ( {children} ) => {

    
  const [ MainObject, setMainObject ] = useState( [] );

  const peticion = async( URL ) => {

      const fetchResponse  = await fetch( URL );
      const data   = await fetchResponse.json();
      
      setMainObject( data );
  };


    return (
        <ACContext.Provider value={ { MainObject, setMainObject, peticion } } >
            { children }
        </ACContext.Provider>
    );
};