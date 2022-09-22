import React from 'react';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';
import { expandCard } from '../../functions/general';

const Music = () => {

  const { mainURL, MainObject } = useContext(ACContext);
  console.log(MainObject, mainURL);
  
  //? VARIABLES

//* HTML - DOM
const searchPanel  = document.querySelector('.search-panel__input'); 

//* FUNCIONALES


  //? FUNCIONES * CARTA





  //? FUNCIONES * FILTROS

  const searchFilter = f => f.name['name-USen'].includes( searchPanel === null ? '' : searchPanel.value.toLowerCase() );


  //? USE STATE 

  const [ isSearch       , setIsSearch ]        = useState(false);
  const [ zonaNorte      , setZonaNorte ]       = useState(true);

  
  
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
                  <p>Price - <b className='price-fish' >{ sea.price } bayas</b></p>
                  <p>Price(CJ) - <b className='price-cj-fish' >{ sea['price-cj'] } bayas</b></p>
                </li>
                <li>
                  {/* <p>Rarity - <b className='rarity-fish' >{ fish.availability.rarity }</b></p> */}
                  <p>Rarity - <b >{ sea.availability.rarity }</b></p>
                  <p>Time - <b>{ sea.availability.isAllDay? 'All day' : sea.availability.time }</b></p>
                </li>
                <li>
                  {/* <p>Location - <b className='location-fish' >{ fish.availability.location }</b></p> */}
                  <p>Location - <b >{ sea.availability.location }</b></p>
                  <p>Shadow size - <b className='shadow-fish' >{ sea.shadow }</b></p>
                </li>
              </ul>
                <div className="info-expanded">
                  <p>Catch phrase - <b>{ sea['catch-phrase'] }</b></p>
                  <p>Museum description - <b>{ sea['museum-phrase'] }</b></p>
                </div>
                  
              <div className='calendar' > 
                <p>Disponibility:</p>
                <ul className='months' >
                  { sea.availability.isAllYear  ? 'All Year' : ( zonaNorte 
                  ? sea.availability['month-array-northern'] : sea.availability['month-array-southern'])
                  .map( (v , i , a) => {
                    // let arrMonths = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'  ];
                    
                    (i === (a.length - 1 ) || i === 0 ? (
                      v === 1 &&  (v = 'Jan') || v === 2 &&  (v = 'Feb') || 
                      v === 3 &&  (v = 'Mar') || v === 4 &&  (v = 'Apr') ||
                      v === 5 &&  (v = 'May') || v === 6 &&  (v = 'Jun') ||
                      v === 7 &&  (v = 'Jul') || v === 8 &&  (v = 'Aug') ||
                      v === 9 &&  (v = 'Sep') || v === 10 && (v = 'Oct') ||
                      v === 11 && (v = 'Nov') || v === 12 && (v = 'Dec')
                      ) : v = ''
                    ); 
                    return v;

                    } ).join( ' ' ).replace(/\s+/g, ' - ') }
                </ul>
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

export default Music