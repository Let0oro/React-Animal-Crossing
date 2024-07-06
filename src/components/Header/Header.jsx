import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <nav>

      <Link to='/' className="logo"  >
        <img src="https://img.icons8.com/clouds/500/animal-crossing.png" />
      </Link>  
    
    </nav>
  )
}

export default Header;