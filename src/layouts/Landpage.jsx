import React from 'react';
import './landpage.scss';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Slider from '../components/slider/Slider';

const Landpage = () => {
  return (
    <div className="landpage" id="landpage">
      <Header />
      <div className="landpage__texts">
            <h1>UX/UI disaini portfoolio</h1>
            <h2>õpingute raames tehtud töödest</h2>
            <div className="scroll">
                <span></span>
                <span></span>
                <span></span>
            </div>            
        </div>
        <div className="landpage__slider">
            <Slider />
        </div>
        <div className="landpage__img-1"></div>
        <div className="landpage__img-2"></div>
        <div className="landpage__projects">
          <div className="links">
              <ul className="links__list">
                    <h1>Õpingud/projektid</h1>
                    <li className="links__item">
                        <Link to="/projektid/ux-analuus">
                            <span>UX analüüs</span>
                            <svg className="links__icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                            </svg>
                        </Link>
                   </li>
                   <li className="links__item">
                        <Link to="/projektid/veebikujundus">
                            <span>Veebikujundus</span>
                            <svg className="links__icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                            </svg>
                        </Link>
                   </li>
                   <li className="links__item">
                        <Link to="/projektid/veebiarendus">
                            <span>Veebiarendus</span>
                            <svg className="links__icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                            </svg>
                        </Link>
                   </li>
                   <li className="links__item">
                        <Link to="/projektid/graafiline-disain">
                            <span>Graafiline disain</span>
                            <svg className="links__icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                            </svg>
                        </Link>
                   </li>
                   <li className="links__item">
                        <Link to="/projektid/muud-projektid">
                            <span>Muud õpingud</span>
                            <svg className="links__icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                            </svg>
                        </Link>
                   </li>
              </ul>
          </div>
        </div>
        <div className="landpage__about">
            <div className="links">
                <ul className="links__list">
                    <h1>Minust</h1>
                    <li className="links__item">
                        <HashLink to="/#aboutme">
                                <span>Enesetutvustus</span>
                                <svg className="links__icon">
                                    <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                                </svg>
                        </HashLink>
                    </li>
                    <li className="links__item">
                        <HashLink to="/#education">
                                <span>Haridus</span>
                                <svg className="links__icon">
                                    <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                                </svg>
                        </HashLink>
                    </li>
                    <li className="links__item">
                        <Link to="/">
                                <span>Enesefreklatsioon</span>
                                <svg className="links__icon">
                                    <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-arrow-right2`}></use>
                                </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="landpage__contact">
            <HashLink to="/#footer" className="contact-btn">
                <div className="contact-btn__item">
                    <svg className="contact-btn__icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-envelope`}></use>
                    </svg>
                </div>
            </HashLink>     
        </div>
    </div>
  )
}

export default Landpage
