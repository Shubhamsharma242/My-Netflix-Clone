import React from 'react'
import logo from '../../img/download.png'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  /* const link= () => {            

    window.location.href = "/";
   
    } */

  return (
    <nav className='header'>
        <Link className='image' to={"/"}>
        <img  src={logo}  alt="Netflix-logo" /* onClick={link} */ />
        </Link>
       
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyAdded">Recently Added</Link>
            <Link to="/myList">My List</Link>
        </div>
       <ImSearch/>
    </nav>
  )
}

export default Header