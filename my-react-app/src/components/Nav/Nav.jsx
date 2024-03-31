
import './Nav.css'
import { useState } from 'react';
import menuIcon from '../../assets/Button.png'
import logo from '../../assets/Logo.png'

const Nav = () => {

  const [activeLink, setActiveLink] = useState('');
  const [showMenu, setShowMenu] = useState(false);


  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowMenu(false);
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
          <a href='#carrusel' onClick={() => handleLinkClick('Destacadas')}>Destacadas</a>
          <a href='#billboard' onClick={() => handleLinkClick('Cartelera')}>Cartelera</a>
          <a href='#' onClick={() => handleLinkClick('Comprar ticket')}>Comprar ticket</a>
        </div>
      ) : (
        <div className='linkContainer'>
          <a
            className={activeLink === 'Destacadas' ? 'links active' : 'links'}
            href='#carrusel'
            onClick={() => handleLinkClick('Destacadas')}
          >
            Destacadas
          </a>
          <a
            className={activeLink === 'Cartelera' ? 'links active' : 'links'}
            href='#billboard'
            onClick={() => handleLinkClick('Cartelera')}
          >
            Cartelera
          </a>
          <a
            className={activeLink === 'Comprar ticket' ? 'buyTicket active' : 'buyTicket'}
            href='#'
            onClick={() => handleLinkClick('Comprar ticket')}
          >
            Comprar ticket
          </a>
        </div>
      )}

      <div className='hamburgerIcon' onClick={() => toggleMenu()}>
        <img src={menuIcon} alt="menu" />
      </div>
    </nav>
  );
};


export default Nav;