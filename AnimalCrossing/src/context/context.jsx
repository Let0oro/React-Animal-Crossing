import { createContext, useState, useEffect } from "react";

export const ACContext = createContext();

export const ACContextProvider  = ( {children} ) => {

    
  const [ mainURL, setMainURL ]       = useState ('https://acnhapi.com/');
  const [ MainObject, setMainObject ] = useState( [] );

  const peticion = async( URL ) => {

      const fetchResponse  = await fetch( URL );
      const data   = await fetchResponse.json();
      
      setMainObject( data );
  };

  
  useEffect(() => {
    console.log({mainURL});
    
    peticion( mainURL );
  
  }, [mainURL]);


    return (
        <ACContext.Provider value={ { mainURL, setMainURL, MainObject, setMainObject } } >
            { children }
        </ACContext.Provider>
    );
};