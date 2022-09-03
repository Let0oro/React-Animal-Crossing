import { createContext, useState, useEffect } from "react";

export const ACContext = createContext();

export const ACContextProvider  = ( {children} ) => {

    
  const [ mainURL, setMainURL ]       = useState ( 'https://acnhapi.com/v1a/fish' );
  const [ MainObject, setMainObject ] = useState( [] );

  const peticion = async( URL ) => {
    const fetchResponse  = await fetch( URL );
    const data   = await fetchResponse.json();
    
    setMainObject( data );
  };

  
  useEffect(() => {
    peticion( mainURL );
  
  }, []);


    return (
        <ACContext.Provider value={ { mainURL, MainObject } } >
            { children }
        </ACContext.Provider>
    );
};