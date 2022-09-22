import React from 'react';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';
import { expandCard } from '../../functions/general';
import './Fossils.css';



const Fossils = () => {

  const { mainURL, MainObject } = useContext(ACContext);
  console.log(MainObject, mainURL);


  const searchPanel  = document.querySelector('.search-panel__input'); 

  const searchFilter = f => f.name['name-USen'].includes( searchPanel === null ? '' : searchPanel.value.toLowerCase() );

  const [ zonaNorte      , setZonaNorte ]       = useState(true);
  const [ sortPrice      , setSortPrice ]       = useState(0);
  const [ filterRarity   , setFilterRarity ]    = useState(0);
  const [ filterLocation , setFilterLocation ]  = useState(0);
  const [ sortShadow     , setSortShadow ]      = useState(0);
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


          .map( (  sea, id  ) => (

            <figure className='card' key={ sea.id }
            // onMouseMove={ () => followFish( event, sea.id ) }
            // onMouseLeave={ () => backFish( event, sea.id ) }
            >
              <button className='exp_card' 
            onClick={ () => expandCard( event ) }>?</button>
              <h1 className='name-fish' >{ sea.name['name-USen'] }</h1>
              <div className='info-fossil'>
                <li>
                  <p>Price - <b className='price-fish' >{ sea.price } bayas</b></p>
                  <p>Catch phrase - <b>{ sea['catch-phrase'] }</b></p>
                  <p>Museum description - <b>{ sea['museum-phrase'] }</b></p>
                </li>
                
              </div>
                                
              <img className='icon-fish-img' src={ sea.image_uri } alt={`icon of ${ sea.name['name-USen']}`} />
            
            </figure>



        ))
        : (
          <h2 className='charge' >Cargando...</h2> 
        )}
      </div>

    </div>
    
  );
}

export default Fossils