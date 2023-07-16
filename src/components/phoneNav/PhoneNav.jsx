import React, { useState} from 'react';
import '../phoneNav/phoneNav.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const PhoneNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <div class={`overlay overlay__menu  ${isOpen ? 'overlay-active' : 'overlay__menu--hidden'}`} id="overlay">
            <div class="overlay__content">
                <div class="overlay__heading">
                    <h1>Õpingud/projektid</h1>
                </div>
                <nav class="overlay__nav">
                    <Link className="overlay__nav--link" to="/projektid/ux-analuus" onClick={toggleMenu}>UX/UI disain</Link>
                    <Link className="overlay__nav--link" to="/projektid/veebikujundus" onClick={toggleMenu}>Veebikujundus</Link>
                    <Link className="overlay__nav--link" to="/projektid/veebiarendus" onClick={toggleMenu}>Veebiarendus</Link>
                    <Link className="overlay__nav--link" to="/projektid/graafiline-disain" onClick={toggleMenu}>Graafiline disain</Link>
                    <Link className="overlay__nav--link" to="/projektid/muud-opingud" onClick={toggleMenu}>Muud õpingud</Link>
                </nav>
            </div>
        </div>
        
        <div class="phone">
            <nav class="phone__nav">
                <Link to="/" className="phone__nav--link">
                    <svg class="phone__nav--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-home`}></use>
                    </svg>
                    <span>Avaleht</span>
                </Link>
                <Link to="/projektid/ux-analuus" className="phone__nav--link">
                    <svg class="phone__nav--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-snippet_folder`}></use>
                    </svg>
                    <span>Projektid</span>
                </Link>
                <div class="menu__btn">
                    <div class={`menu  ${isOpen ? 'change' : ''}`} id="menu" onClick={toggleMenu}>
                        <div class="menu__bar1"></div>
                        <div class="menu__bar2"></div>
                        <div class="menu__bar3"></div>
                    </div>
                </div>
                <HashLink to="/#contact" className="phone__nav--link">
                    <svg class="phone__nav--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-email`}></use>
                    </svg>
                    <span>Kontakt</span>
                </HashLink>
                <HashLink to="/#aboutme" className="phone__nav--link">
                    <svg class="phone__nav--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-person`}></use>
                    </svg>
                    <span>Minust</span>
                </HashLink>
            </nav>
        </div>
    </>
  )
}

export default PhoneNav
