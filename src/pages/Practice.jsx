import React from 'react';
import Header from '../components/header/Header';
import './practice.scss';
import { Link } from 'react-router-dom';

const PracticePage = () => {
  return (
    <>
        <Header sticky={'header__sticky'} logoNone={'none'} />
        <section className="section-1">
            <div className="intro">
                <img src={`${process.env.REACT_APP_URL}/images/bg_frillice_logo.png`} alt="Frillice logo" />
                <div className="intro__company">
                    <h1>Praktika ettevõttes Frillice OÜ</h1>
                    <p>Kasutajakogemuse disaini esimese aasta praktika toimus ajavahemikus 
                        03.04.23 - 21.05.23 ettevõttes nimega Frillice OÜ. 
                        Kogu praktika toimus kaugtööna kodus. 
                        Frillice on kogukonna toitumise äpp, mis meenutab mingil määral Instagrami, 
                        kus sisuks on retseptid. Äpp aitab kasutajatel tervislikult süüa ja saavutada kaaluga seounduvaid eesmärke, 
                        samuti toob ühte kohta kokku paljud sisuloojad, 
                        kes saavad luua oma loomingut retseptide kujul.</p>
                </div>
            </div>
        </section>
        <section className="section-2">
            <h1 className="title-0">Ettevõte tagasiside</h1>
            <div className="feedback">
                <div className="feed-1">
                    <div className="feed-1__flex">
                        <img src={`${process.env.REACT_APP_URL}/images/frillice_logo-2.png`} alt="Frillice logo 2" />
                        <div className="feed-1__text">
                            <span className="feed-1__text--1">Praktikajuhendaja</span>
                            <span className="feed-1__text--2">disainer</span>
                        </div>
                    </div>
                </div>
                <div className="feed-2">
                    <p>Heiki tugevused väljenduvad kindlasti UX disaini ja arenduse sümbioosis. UI disaini osas on õpilasel kindlasti veel suur samm edasi areneda - väiksemate tükkide UI sobitamine olemasoleva UIG'ga on kindlasti juba olemas, kuid uue suure funktsionaalsuse terviku disainimine vajab veel praktikat, et käekiri välja kujuneks. Oli näha, et Heiki flow state tekib UX ja arenduse sümbioosis. Kõik sellised lähteülesanded tulid tal lenneldes. Tiimiliikmena on Heiki kohusetundlik, väga iseseisev ja suurepärane suhtleja. 
                        Usun, et õpilasel on väga head eeldused juba tööturul jalg ukse vahele saada ja oma esimene töö leida puhta UX disainerina (mitte UI) ja/või FE arendajana. Heiki koht on kindlasti IT's olemas.
                    </p>
                    <p>
                        Tiimiliikmena on Heiki kohusetundlik, väga iseseisev ja suurepärane suhtleja. Usun, et õpilasel on väga head eeldused juba tööturul jalg ukse vahele saada ja oma esimene töö leida puhta UX disainerina (mitte UI) ja/või FE arendajana. Heiki koht on kindlasti IT's olemas.
                    </p>
                </div>
            </div>
        </section>
        <section className="section-3">
            <h1 className="title-0">Tehtud tööd</h1>
            <div className="works">
                <div className="card__item">
                        <img className="card__item--img" src={`${process.env.REACT_APP_URL}/images/frillice_veebirakendus.png`} alt="frillice_veebirakendus" />
                    <svg className="card__item--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-embed2`}></use>
                    </svg>
                    <div className="card__content">
                        <h1 className="card__item--title">Frillice veebiraknedus</h1>
                        <p className="card__item--text">Disain ja arendus. Uudiskirja sektsioon, Frillice-it tutvustav video modal, privacy policy modal.
                        </p>
                    </div>
                    <div className="card__link">
                        <Link to="https://frillice.com/" className="card__item--link" target="_blank" rel="noopener noreferrer">Vaata lähemalt</Link>
                    </div>
                </div>

                <div className="card__item">
                    <img className="card__item--img" src={`${process.env.REACT_APP_URL}/images/frillice_äpp.png`} alt="frillice äpp" />
                    <svg className="card__item--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-figma`}></use>
                    </svg>
                    <div className="card__content">
                        <h1 className="card__item--title">Frillice äpi disain</h1>
                        <p className="card__item--text">Figmas tehtud äpi lahendused. 
                        </p>
                    </div>
                    <div className="card__link">
                        <Link to="https://drive.google.com/file/d/1NCIc44lmVkNeiJuwKXkS9uPlpTy8facf/view?usp=sharing" className="card__item--link" target="_blank" rel="noopener noreferrer">Vaata lähemalt</Link>
                    </div>
                </div>
                <div className="card__item">
                    <img className="card__item--img" src={`${process.env.REACT_APP_URL}/images/frillice_screenid.png`} alt="frillice äpp" />
                    <svg className="card__item--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-figma`}></use>
                    </svg>
                    <div className="card__content">
                        <h1 className="card__item--title">Frillice äpi screenid</h1>
                        <p className="card__item--text">App store-i ja Google Play poodi disainisin screen-id, mis tutvustavad Frillice rakendust. 
                        </p>
                    </div>
                    <div className="card__link">
                        <Link to="https://apps.apple.com/ee/app/frillice-nutrition/id1660586841" className="card__item--link" target="_blank" rel="noopener noreferrer">Vaata lähemalt</Link>
                    </div>
                </div>
                <div className="card__item">
                    <img className="card__item--img" src={`${process.env.REACT_APP_URL}/images/wordpress.png`} alt="koduleht" />
                    
                    <svg className="card__item--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-wordpress`}></use>
                    </svg>
                    <div className="card__content">
                        <h1 className="card__item--title">Heikki Mägi koduleht</h1>
                        <p className="card__item--text">Frillice juhile personaalne koduleht. Disain ja arendus (Figma, Wordpress).
                        </p>
                    </div>
                    <div className="card__link">
                        <Link to="https://heikkimagi.com/" className="card__item--link" target="_blank" rel="noopener noreferrer">Vaata lähemalt</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PracticePage
