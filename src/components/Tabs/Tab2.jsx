import React from 'react';
import './tabs.scss';
import ProjectList from '../ProjectList';

const Tab2 = () => {
  return (
    <div className="projects__content">
      <h1 class="projects__content--heading tab--2">Veebikujundus</h1>
      <div class="projects_desc">
          <div class="projects__desc--item">
              <h1>1. Animatsioonid</h1>
              <p>
                  Selles aines õppisime kuidas kasutada animatsioone ning millal on neid kõige parem kasutada. Kasutasin Cinemagraph programmi millega saab teha pildi ja video kombinatsioone. Kuid peamine ja kõige keerulisem programm, mida selles aines õppisin oli Adobe After Effects.
              </p>
              <div class="projects__desc--list">
                  <h2>Lisaks õppisin teemasid:</h2>
                  <ul>
                      <li>kasutatuvus e. Usability (efetkiivus, tõhusus, rahuolu)</li>
                      <li>UX meetodid</li>
                      <li>Kasutusmugavus ja selle uuringud</li>
                      <li>Sihtrühma kaardistamine, dokumenteerimine</li>
                      <li>Disainisüsteemid</li>
                  </ul>
              </div>
          </div>
          <div class="projects__desc--item">
              <h1>2. Visandi loomine</h1>
              <p>
                  Visandi loomise aines, esmalt õppisin mis on isotype piktogrammid, ligatuurid ja monogrammid ning täitsin tunnitööna selle teemalisi töölehti. Samas aines õppisin tegema logo Illustrator programmiga, lähteülesandeks oli logo loomine iluvõimlejate rühmale nimega Rosabella.

              </p>
              <div class="projects__desc--list">
                  <h2>Logo etappid:</h2>
                  <ul>
                      <li>Ideede genereerimine</li>
                      <li>Kavandite loomine</li>
                      <li>Sobiva kirjastiili ja värvi lahenduse leidmine</li>
                      <li>Valmis logo Illustrator-is</li>
                  </ul>
              </div>
          </div>
          <div class="projects__desc--item">
              <h1>3. Struktuurikavand</h1>
              <p>
                  Struktuuri kavandi aines tegin valmis arenguportfoolio esmased kavandid, et tekkiks parem visioon portfoolio struktuurist. Kavandi tegemiseks kasutasin Figma programmi. Disainis valmis desktop kui ka mobiili vaate. 
              </p>
          </div>
          <div class="projects__desc--item">
              <h1>4. Veebitehnoloogiad ja kujundisvahendid</h1>
              <p>
                  Selles aines õppisin tegema sõna pilvekesi, kasutades selle erialaga seounduvaid termineid. Lisaks tutvusin erinevate veebitehnoloogia trendidega ning tegin klassile valitud teema kohta esitluse.
              </p>
          </div>
          <div class="projects__desc--item">
              <h1>5. Disaini kavandamine ja prototüüpimine</h1>
              <p>
                  Õppisin erinevaid viise kuidas saab prototüüpe teha (Figma, paber prototüübid jne.) Kuigi varasemalt mingil määral oskasin Figma programmi (alg teadmised olid olemas) siis selles aines õppisin iseseisvalt uusi tehnikaid juurde, et töö tegemine Figmas oleks efektiivsem. Lugesin läbi 2 erialast teost nimelt Steve Krugi raamat “Don't Make Me Think” ja “Pixel Perfect Precision”. Mõlemad teosed töötasin läbi tehes olulisematest asjadest google docsi märkmeid.
              </p>
              <div class="projects__desc--list">
                  <h2>Lisaks õppisin teemasid:</h2>
                  <ul>
                      <li>Mis on kasutajakogemuse tegurid  ja näitlikustamise mudelid.</li>
                      <li>Kasutatavuse üldkriteeriumid ja heuristikud (J. Nielsen)</li>
                      <li>Ligipääsetavus (accessibility)</li>
                      <li>Disaini mustrid ja UI elemendid</li>
                  </ul>
              </div>
          </div>
          <div class="projects__desc--item">
              <h1>6. HTML, CSS, Bootstrap</h1>
              <p>
                  Need tehnoloogiad on mulle varasemalt selged ning seetõttu kandsin need ained Võtaga üle. Õppisin neid tehnoloogiaid kasutama Tartu Kutsehariduskeskuses Noorem tarkvaraarendaja erialal (VS18). 
              </p>
          </div>
          <ProjectList category={'ux_ui'} />
      </div>
    </div>
  )
}

export default Tab2
