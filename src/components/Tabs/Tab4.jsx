import React from 'react';
import './tabs.scss';
import ProjectList from '../ProjectList';

const Tab4 = () => {
  return (
    <div className="projects__content">
      <h1 class="projects__content--heading tab--4">Graafiline disain</h1>
        <div class="projects_desc">
            <div class="projects__desc--item">
                <h1>1. Graafikalauaga joonistamine</h1>
                <p>
                    Õppisin kasutama graafikalauda kasutades maalimise programmi ArtRage.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>2. Adobe Photoshop</h1>
                <p>
                    Teise programmina õppisin kasutama Photoshopi, kasutasin seda peamiselt pilditöötluseks lahendades etteantud ülesandeid. Katsetasin selle programmi erinevaid võimalusi ja tööriistu.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>3. Fotoseeria</h1>
                <p>
                    Õppisin tegema fotoseeriat, tegin 3-4 fotot mida hiljem Photoshop-iga töötlesin.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>4. Tänukirja loomine</h1>
                <p>
                    Kujundasin oma loomingulise tänukirja kasutades Photoshopi.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>5. IKT-osakonnale animeeritud jõulukaart</h1>
                <p>
                    Koostasin animeeritud jõulukaardi, mis oli mõeldud kooli koostööpartneritele saatmiseks.
                </p>
            </div>
            <div class="projects__desc--item">
                <h1>6. Adobe Illustrator</h1>
                <p>
                    Õppisin kasutama Illustratorit tehes erinevaid ülesandeid.
                </p>
            </div>
            <ProjectList category={'graafika'} />
        </div>
    </div>
  )
}

export default Tab4
