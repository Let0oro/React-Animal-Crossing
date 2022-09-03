import './Fish.css';
import { ACContext } from '../../../context/context';
import { useContext } from 'react';
import { useState } from 'react';


const Fish = ( ) => {
  
  const { MainObject } = useContext(ACContext);


  followFish = () => {

  };

  backFish = () => {

  };


  // const { availability } = MainObject.availability;
  // const [ zonaNorte, setZonaNorte ] = useState(0);


  return (

    <div className='table'>

        {/* <div className="filter"> */}
          {/* <button onClick={ () => setZonaNorte( 2 ) } >Zona Sur</button>
          <button onClick={ () => setZonaNorte( 1 ) }  >Zona Norte</button>
          <button onClick={ () => setZonaNorte( 0 ) }    >Quitar filtros ({zonaNorte > 0 ? ( zonaNorte === 1 ? 'Hola' : 'Adios'  ) : 'Vacío'})</button> */}

          {/* <p>{ (MainObject.length > 0 
            ? (zonaNorte > 0 

              ? ( zonaNorte === 1 

                  ? MainObject.filter( ( { availability } ) =>  availability['month-northern'].length > 0) 

                  : MainObject.filter( ( { availability } ) =>  availability['month-southern'].length > 0) 
                )
              : MainObject

              ).map( ( {id} ) => {id}).length 


            : 'Nada') }</p>  */}
        {/* </div> */}

        { (MainObject.length > 0) ?

        // (zonaNorte > 0 ?

        //   (zonaNorte === 1 ? 
        //     MainObject.filter( ( { availability } ) =>  availability['month-northern'].length > 0)

        //   :
        //     MainObject.filter( ( { availability } ) =>  availability['month-southern'].length > 0)

        //   ) 

        // : MainObject )

        MainObject
        .map( (  fish  ) => (

        <div className="gallery" key={fish.id}>
          <figure className='card'  
          onMouseMove={ followFish }
          onMouseLeave={ backFish }
          >
            <h1 className='name-fish' >{ fish.name['name-USen'] }</h1>
            <ul className='info-fish' >
              <li>
                <p>Price - { fish.price }</p>
                <p>Price(CJ) - { fish['price-cj'] }</p>
              </li>
              <li>Location</li>
              
            </ul>
            <div className="icon-fish">
              <img src={ fish.icon_uri } alt={`icon of ${ fish.name['name-USen']}`} />
            </div>
          </figure>
        </div>


      )) 
      : (
        <h2 className='charge' >Cargando...</h2> 
      )}
    </div>

  )
}

export default Fish;