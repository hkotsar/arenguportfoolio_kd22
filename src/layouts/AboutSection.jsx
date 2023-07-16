import React from 'react';
import './aboutSection.scss';
import TechList from '../components/skills/TechList';
import { Link } from 'react-router-dom';
const AboutSection = () => {
  return (
    <>
        <section class="about" id="aboutme">
            <div class="about__1">
                <div class="info-1">
                    <h1>UX/UI disainer</h1>
                    <span>&</span>
                    <h1>Front-end arendaja</h1>
                </div>
            </div>
            <div class="about__2">
                <div class="info-2">
                    <svg class="info-2--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-person`}></use>
                    </svg>
                    <h1>Heiki Kotsar</h1>
                    <div class="cv">
                        <Link className="cv__btn" to="https://drive.google.com/file/d/1NHHmVualzP28u-GE_-R2rAQ3dPg05D21/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className="cv__btn--text">Vaata CV</span>
                            <svg className="cv__btn--icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-download`}></use>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="about__3">
                <div className="info-3">
                    <div className="info-3__title">
                        <h1 className="title">Teadmised ja oskused</h1>
                    </div>
                    <p className="paragraph">
                        Oman teadmisi rohkem front-end arenduses aga hetkel on see pigem teisejärguline, sest keskendun rohkem UX/UI õppimisele. Kooli lõpetades näen ennast tööle minnes disainerina kui ka front-end arendajana ehk siis eesmärk on mõlemat hästi osata ja rohkem töö kogemust saada.
                    </p>
                </div>
            </div>
            <div className="about__4">
                <img src={`${process.env.REACT_APP_URL}/images/avasta_tartut-2.png`} alt="Avasta Tartut" />
            </div>
            <div className="about__5">
                <div className="info-5">
                    <div className="info-5__title">
                        <h1 className="title">Enesetutvustus</h1>
                    </div>
                    <p className="paragraph">
                        Olen Heiki Kotsar (24 aastane) ning olen UX/UI disaini ning veebiarendus huviline, kes õpib praegu Tartu Rakenduslik Kolledž-is. 
                        Spetsiifilisemalt õpin koolis esimest aastat UX/UI disaini nooremspetsialisti erialal. 
                        Varasemalt olen Tartu Kutsehariduskeskuses (Uue nimega Tartu Rakenduslik Kolledž) õppinud Noorem tarkvaraarendaja erialal. 
                        Veebiarendust õppides sain proovida nii front-end kui ka back-end arendust ning sain aru, et front-end ja disain on peamised mis pakuvad mulle rohkem huvi. 
                        Sellega seonduvalt otsustasin tulla õppima kasutajaliidese disaini. Peamiseks hobiks on investeerimine ja kauplemine futuuridega ehk siis vabal ajal jälgin börsi graafikuid ning õpin tehnilist analüüsi.
                    </p>
                </div>
            </div>
            <div className="about__6">
                <div className="info-6">
                    <div className="info-6__title">
                        <h1 className="title">Tehnoloogiad</h1>
                        <TechList />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutSection
