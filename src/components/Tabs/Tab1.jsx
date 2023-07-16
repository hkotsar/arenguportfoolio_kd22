import React from 'react'
import './tabs.scss';
import ProjectList from '../ProjectList';



const Tab1 = () => {

  return (
    <div className="projects__content">
      <h1 class="projects__content--heading tab--1">UX analüüs</h1>

       <div class="projects__desc">
          <div class="projects__desc--item">
              <h1>1 .Kasutajakogemuse analüüs</h1>
              <p>
                  Selles aines õppisin erinevaid viise kuidas läbi viia kasutajateste, 
                  milleks need on vajalikud ning millal on teste õige aeg teha. Mis on nende testide tugevused ja nõrkused/piirangud. 
                  Õppisin koostama kasutatavuse teste vastavalt lähteülesandele (sissejuhatus, intervjuu küsimused, näidis olukorrad, kokkuvõte).
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
              <h1>2. Kasutajakogemuse analüüsi läbiviimine</h1>
              <p>
                  Kasutajakogemuse analüüsi läbiviimine Frillice OÜ-le. Frillice on tervisliku toitumise äpp, 
                  mis annab inimestele ligipääsu korraga paljude retseptiloojate retseptidele, videotele ning kogukonnale. 
                  Kooli projekti eesmärk oli  erinevate UX analüüsi meetodite selgitada välja Frillice toitumise äpp-i sihtrühm ja 
                  testida nendega toidulaua funktsionaalsuse kasutatavust. Tehtud ülesanded: Küsitlus tulemuste analüüs, persoonade loomine, 
                  kasutaja testide läbiviimine ja Frillice tiimile tulemuste esitlemine.
              </p>
          </div>
          <div class="projects__desc--item">
              <h1>3. Google Analyticsi kasutamine</h1>
              <p>Kuigi varasemalt olen Google Analyticsid paigaldanud siis oli see hea meeldetuletus siiski. Sain parema ülevaate mis võimalusi Google Analytics pakub, osaledes Seminaril ja tehes Google Analytics Demo Account ülesandeid.
                </p>
          </div>
          <ProjectList category={'ux'} />
        </div>
    </div>
  )
}

export default Tab1
