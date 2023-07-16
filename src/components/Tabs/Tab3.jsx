import React from 'react';
import './tabs.scss';
import ProjectList from '../ProjectList';

const Tab3 = () => {
  return (
    <div className="projects__content">
      <h1 class="projects__content--heading tab--3">Sisuhaldussüsteemid</h1>
        <div class="projects_desc">
            <div class="projects__desc--item">
                <h1>1. Sissejuhatus tarkvaraarendusse</h1>
                <p>
                    Õppisin sõnastama arendusprojekti probleemi kliendi, kasusaaja ja arendaja vaates. Samuti uurisin miks projektid ebaõnnestuvad ja mida ise teha teisiti. Veel õppisin erinevaid arendusmetoodikaid ja koostasin nende kohta võrdlustabeli. 2. Vahendite kasutamine prototüüpimiseks.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>2. Vahendite kasutamine prototüüpimiseks</h1>
                <p>
                    Meeskonna tööna õppisin kasutama Mockup keskkonda prototüüpide tegemiseks. Valmis sai tehtud lihtne panga rakendus.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>3. Veebihaldus</h1>
                <p>
                    Veebihaldus tunnis õppisin paigaldama LAMP- stacki ubuntu serverisse ja sain meeldetuletuse kuidas manuaalselt serverisse wordpressi paigaldatakse. Samuti ubuntu server.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>4. Versioonihaldus</h1>
                <p>
                    Versioonihaldus tunnis sain põhjaliku meeldetuletuse versioonihalduse erinevatest võimalustest. 
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>5. A/B testimine</h1>
                <p>
                    Selles aines õppisin A/B-testimise teoreetilist osa otsides vastuseid Google Formsi küsimustele. Lisaks paigaldasin näidis lehele Google analyticsi ja tegin ülejäänud vajalikud tegevused, et teha A/B teste Optimize-iga.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>6. Sisuhaldussüsteemid</h1>
                <p>
                    Selle aine kandsin üle kuna olen wordpressi varasemalt õppinud Noorem tarkvaraarendaja erialal (VS18).

                </p>
            </div>
            <ProjectList category={'arendus'} />
        </div>
    </div>
  )
}

export default Tab3
