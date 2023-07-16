import React, { useState, useEffect } from 'react'
import '../header/header.scss'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = ({ sticky, logoNone }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const targetOffset = 200; // Adjust this value to set the scroll position where the header becomes sticky

      if (scrollTop >= targetOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <header className={`header ${isSticky ? 'header__sticky' : sticky}`}>
            <div className={`header__logo ${isSticky ? 'none' : logoNone}`}>
                <h1>Heiki Kotsar</h1>
            </div>
            <nav  className="nav">
                <ul  className="nav__list">
                    <li  className="nav__item">
                      <HashLink to="/#landpage" className="nav__item--link">Avaleht</HashLink>
                    </li>
                    <li  className="nav__item">
                      <HashLink to="/#aboutme" className="nav__item--link">Enesetutvustus</HashLink>
                    </li>
                    <li  className="nav__item">
                      <Link to="/projektid/ux-analuus" className="nav__item--link">Projektid</Link>
                    </li>
                    <li  className="nav__item">
                      <Link to="/praktika" className="nav__item--link">Praktika</Link>
                    </li>
                    <li  className="nav__item">
                      <HashLink to="/#footer" className="nav__item--link">Kontakt</HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}


export default Header
