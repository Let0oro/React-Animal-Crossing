import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ACContext} from '../../context/context';
import './Main.css';

//* Cambio de variable más rápido que UseState

let used        = 0    ;
let isUsedLeft  = false;
let isUsedRight = false;

//* Fin de cambio de variable

const Main = () => {
  

  //* UseState 
  const [ dialogue, setDialogue ]               = useState( '' );
  const [ isBackActivate, setIsBackActivate ]   = useState( '' );
  const [ isTendo, setIsTendo ]                 = useState( '' );
  const [ isNamerActivate, setIsNamerActivate ] = useState( '' );
  const [ isAnimate, setIsAnimate ]             = useState( 'invisible' );
  
  // const [ isUsedLeft, setIsUsedLeft ] = useState(false);
  // console.log( mainURL.split('/') );
  //* Fin UseState 


  //* UseRef 


    // Left 
  const fishButton    = useRef(null);
  const seaButton     = useRef(null);
  const bugsButton    = useRef(null);
  const fossilsButton = useRef(null);

    // Right 
  const villagersButton = useRef(null);
  const itemsButton     = useRef(null);
  const songsButton     = useRef(null);
  const artButton       = useRef(null);

  //* Fin UseRef


  //* Funciones visibilizar o invisibilizar diálogo 

  const visiblizer = () => {
    setIsBackActivate( 'back-activate' );
    setIsNamerActivate( 'namer-activate' );

  };

  const invisiblizer = () => {
    setIsBackActivate( '' );
    setIsNamerActivate( '' );
    setIsAnimate( 'invisible' );
    setDialogue( '' );
    setIsTendo( '' );

  };

  const leftIsUsed = () => {
      // NOOO, pero vigila!!! Lo pongo en falso porque el tiempo que tarda en hacerse la función es menor que el que tarda en cambiar el valor

    if (isUsedLeft) {
      setDialogue( 'Click me again to close the menu' );
      visiblizer();
      setIsTendo( 'Tendo' );
    
    };
  };

  const rightIsUsed = () => {

    if (isUsedRight) {
      setDialogue( 'Click me again to close the menu' );
      visiblizer();
      setIsTendo( 'Nendo' );
    
    };
  };

  //* Fin funciones visibilizar o invisibilizar botones 

//* Funcion escribir dialogo

  const write = (text, bool) => {

    let element = '';
    let index = 0;
    used = false;

    const nooky = setInterval(() => {
      if ( bool === true && used === false && isUsedLeft === false) {
        
        (isUsedLeft  && leftIsUsed()); 
        (isUsedRight && rightIsUsed()); 

        visiblizer();

        text.split(' ').includes( 'consumables' )
          ? setIsTendo( 'Tendo' )
          : setIsTendo( 'Nendo' )
        ;

        element += text.split( '' )[ index ];
        index++;        
        setDialogue( element );

        ( element.length === text.length && 
          ( clearInterval( nooky ) & setIsAnimate( 'animate' ) ) 
        );

      } else {
        clearInterval( nooky );
        used = true;

        // console.log( '4: ' + isUsedLeft );

        (isUsedLeft  ? leftIsUsed()  : invisiblizer() );
        (isUsedRight ? rightIsUsed() : invisiblizer() );

      };

    }, 40);

  };

  //* Fin funcion escribir


  //* Funcion desplegar botones left (onClick)

  const deployButtonsLeft = () => {
    // console.log('1: ' + isUsedLeft);

    if (isUsedLeft) {
      // -> sin pulsar
      isUsedLeft = false;
      // setIsUsedLeft(false);
      write('', false);

      fishButton.current.className    = 'desplegable--left';
      seaButton.current.className     = 'desplegable--left';
      bugsButton.current.className    = 'desplegable--left';
      fossilsButton.current.className = 'desplegable--left';

    } else {
      // -> Pulsado
      isUsedLeft = true;
      // setIsUsedLeft(true);
      // console.log('2: ' + isUsedLeft);
      write('', false); 
      leftIsUsed();
      
      fishButton.current.className    = 'fish--button' ;
      seaButton.current.className     = 'sea--button'  ;
      bugsButton.current.className    = 'bugs--button' ;
      fossilsButton.current.className = 'fossils--button';
    };
    // console.log('3: ' + isUsedLeft);
  };

  //* Fin funcion desplegar botones left


  //* Funcion desplegar botones right (onClick)

  const deployButtonsRight = () => {

    if (isUsedRight) {
      // -> sin pulsar
      isUsedRight = false;
      write('', false);

      villagersButton.current.className  = 'desplegable--right';
      itemsButton.current.className      = 'desplegable--right';
      songsButton.current.className      = 'desplegable--right';
      artButton.current.className        = 'desplegable--right';

    } else {
      // -> Pulsado
      isUsedRight = true;

      write('', false); 
      rightIsUsed();
      
      villagersButton.current.className  = 'villagers--button' ;
      itemsButton.current.className      = 'items--button'     ;
      songsButton.current.className      = 'songs--button'     ;
      artButton.current.className        = 'art--button'       ;
    };

  };

  //* Fin funcion desplegar botones right (onClick)


  return (

    <div className="main">

      <button 
      className='button--left' 
      onClick={ deployButtonsLeft }
      onMouseMove={ leftIsUsed }
      onMouseOver={ () =>  write( 'Click me if you need more info about consumables', true ) } 
      onMouseOut={ () => write( '', false ) } 
      ></button>


      <Link to='/Fish'
      ref={ fishButton }
      className='desplegable--left'

      />


      <Link to='/Sea'
      ref={ seaButton }
      className='desplegable--left'

      />


      <Link to='/Bugs'
      ref={ bugsButton }
      className='desplegable--left'

      />


      <Link to='/Fossils'
      ref={ fossilsButton }
      className='desplegable--left'

      />


      <img src="https://dodo.ac/np/images/c/c7/Timmy_and_Tommy_NH_Line_Artwork.svg" alt="Timmy tommy Animal Crossing New Horizonts" />


      <button
      className='button--right' 
      onClick={ deployButtonsRight } 
      onMouseMove={ rightIsUsed }
      onMouseOver={ () =>  write( 'Click me if you need more info about living beings.', true ) } 
      onMouseOut={ () => write( '', false ) } 
      />

      <Link to='/Villagers'
      ref={ villagersButton }
      className='desplegable--right'

      />


      <Link to='/Items'
      ref={ itemsButton }
      className='desplegable--right'

      />


      <Link to='/Songs'
      ref={ songsButton }
      className='desplegable--right'

      />


      <Link to='/Art'
      ref={ artButton }
      className='desplegable--right'

      />


      <div className={ 'dialogue ' + isBackActivate } >
        <div className={ 'namer ' + isNamerActivate } >{ isTendo }</div>
        <p>{ dialogue }</p>
        <div className={ 'back ' + isBackActivate } ></div>

        <img className={ isAnimate } src="../../../public/sort-down.png" alt="" />
      
      </div>

    </div>

  )
}

export default Main;