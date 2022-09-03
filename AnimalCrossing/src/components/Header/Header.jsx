import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ACContext } from '../../context/context';
import { useContext } from 'react';



// Cuando esté el main activado, icon no aparece

const Header = () => {

  const { MainObject, setMainURL } = useContext(ACContext);

  return (
    <nav>

      <Link to='/' className="logo" onClick={() => setMainURL( 'https://acnhapi.com/v1a/fish' )} >
        <img src="https://img.icons8.com/clouds/500/animal-crossing.png" />
      </Link>  
    
    </nav>
  )
}

export default Header;