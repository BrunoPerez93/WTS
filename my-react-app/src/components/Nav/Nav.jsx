import { Link } from 'react-router-dom';
import './Nav.css'
import { useState } from 'react';
import menuIcon from '../../assets/Button.png'
import logo from '../../assets/Logo.png'

const Nav = () => {

  const [activeLink, setActiveLink] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
   
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='navContainer'>
      <div className='logoContainer'>
        <img src={logo} alt="logo" />
      </div>

      {showMenu ? (
        <div className='hamburgerMenu'>
          <Link to='#' onClick={() => toggleMenu()}>X</Link> 
          <Link to='#' onClick={() => handleLinkClick('Destacadas')}>Destacadas</Link>
          <Link to='#' onClick={() => handleLinkClick('Cartelera')}>Cartelera</Link>
          <Link to='#' onClick={() => handleLinkClick('Comprar ticket')}>Comprar ticket</Link>
        </div>
      ) : (
        <div className='linkContainer'>
          <Link
            className={activeLink === 'Destacadas' ? 'links active' : 'links'}
            to='#'
            onClick={() => handleLinkClick('Destacadas')}
          >
            Destacadas
          </Link>
          <Link
            className={activeLink === 'Cartelera' ? 'links active' : 'links'}
            to='#'
            onClick={() => handleLinkClick('Cartelera')}
          >
            Cartelera
          </Link>
          <Link
            className={activeLink === 'Comprar ticket' ? 'buyTicket active' : 'buyTicket'}
            to='#'
            onClick={() => handleLinkClick('Comprar ticket')}
          >
            Comprar ticket
          </Link>
        </div>
      )}

      <div className='hamburgerIcon' onClick={() => toggleMenu()}>
        <img src={menuIcon} alt="menu" />
      </div>
    </nav>
  );
};


export default Nav;