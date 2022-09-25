import React from 'react';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';
import { expandCard } from '../../functions/general';

const Songs = () => {

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


          .map( (  obj  ) => (

            <figure className='card' key={ obj.id }
            // onMouseMove={ () => followFish( event, sea.id ) }
            // onMouseLeave={ () => backFish( event, sea.id ) }
            >
              <button className='exp_card' 
            onClick={ () => expandCard( event ) }>?</button>
              <h1 className='name-fish' >{ obj.name['name-USen'] }</h1>
              <ul className='info-fish'>
                <li>
                  <p>Sell price - <b className='price-fish' >{ obj['buy-price'] } bayas</b></p>
                  <p>Buy price - <b className='price-cj-fish' >{ obj['sell-price'] } bayas</b></p>
                  <p>Orderable - <b >{ obj.isOrderable.toString() }</b></p>
                </li>


              </ul>
              

                  
              <img className='icon-fish-img' src={ obj.image_uri } alt={`icon of ${ obj.name['name-USen']}`} />
            
            </figure>



        ))
        : (
          <h2 className='charge' >Cargando...</h2> 
        )}
      </div>

    </div>
  );
}

export default Songs