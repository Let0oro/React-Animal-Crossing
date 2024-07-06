import React from 'react';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';
import { expandCard } from '../../functions/general';


const Villagers = () => {

  const { MainObject, peticion } = useContext(ACContext);
  
  
  useEffect(() => {
    
    peticion( 'https://acnhapi.com/v1a/villagers' );
  
  }, []);
  
  //? VARIABLES

//* HTML - DOM
const searchPanel  = document.querySelector('.search-panel__input'); 

//* FUNCIONALES


  //? FUNCIONES * CARTA





  //? FUNCIONES * FILTROS

  const searchFilter = f => f.name['name-USen'].includes( searchPanel === null ? '' : searchPanel.value.toLowerCase() );


  //? USE STATE 

  const [ isSearch       , setIsSearch ]        = useState(false);

  
  
  return ( 
    
    <div className='table'>

    <div className="search-panel">
      <input className="search-panel__input" type="text" onKeyUp={ () => setIsSearch( isSearch ? false : true ) }/> 
      <button className="search-panel__button" onClick={ () => setIsSearch( isSearch ? false : true ) } >🔍</button>
    </div>

    {/*//? BOTONES HTML */}

    <div className="all-buttons">

        <b>Sort by:  </b>
      <div className='sorting'>
        


      </div>


    </div>

      {/*//? CARTAS HTML */}

      <div className="gallery" >

        { (MainObject.length > 0) ?

          ( isSearch || !isSearch) && 
          MainObject

          .filter( searchFilter )


          .map( (  sea  ) => (

            <figure className='card' key={ sea.id }
            // onMouseMove={ () => followFish( event, sea.id ) }
            // onMouseLeave={ () => backFish( event, sea.id ) }
            >
              <button className='exp_card' 
            onClick={ () => expandCard( event ) }>?</button>
              <h1 className='name-fish' >{ sea.name['name-USen'] }</h1>
              <ul className='info-fish'>
                <li>
                  <p>Birthday - <b className='price-fish' >{ sea['birthday-string'] }</b></p>
                  <p>Gender - <b className='price-cj-fish' >{ sea.gender }</b></p>
                </li>
                <li>
                  <p>Specie - <b >{ sea.species }</b></p>
                  <p>Subtype - <b >{ sea.subtype }</b></p>
                  
                </li>
                <li>
                  <p>Hobby - <b >{ sea.hobby }</b></p>
                  <p>Personality - <b >{ sea.personality }</b></p>
                </li>
              </ul>
                <div className="info-expanded">
                  <p>Catch phrase - <b >{ sea['catch-phrase'] }</b></p>
                  <p>Saying - <b >{ sea.saying }</b></p>
                  
                </div>
                

              <img className='icon-fish-img' src={ sea.icon_uri } alt={`icon of ${ sea.name['name-USen']}`} />
            
            </figure>



        ))
        : (
          <h2 className='charge' >Cargando...</h2> 
        )}
      </div>

    </div>
    
  );
}

export default Villagers