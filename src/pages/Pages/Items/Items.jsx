import React from 'react'
import { Link } from 'react-router-dom';
import './Items.css'

const Items = () => {
  return (
  <div className='items-page'>

    <Link to='/items/houseware'
    // ref={ housewareButton }
    className='houseware'
    onClick={() => setMainURL( 'https://acnhapi.com/v1a/houseware' )} >Houseware</Link>
    <Link to='/items/misc'
    // ref={ miscButton }
    className='misc'
    onClick={() => setMainURL( 'https://acnhapi.com/v1a/misc' )} >Misc</Link>
    <Link to='/items/wallmounted'
    // ref={ wallmountedButton }
    className='wallmounted'
    onClick={() => setMainURL( 'https://acnhapi.com/v1a/wallmounted' )} >Wallmounted</Link>

    </div>
  )
}

export default Items