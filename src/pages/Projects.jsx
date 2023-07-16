import React from 'react';
import Header from '../components/header/Header';
import { Link, Outlet } from 'react-router-dom';
import './projects.scss';

const ProjectsPage = () => {
  return (
    <>
      <Header sticky={'header__sticky'} logoNone={'none'}  />
      <section class="section-projects">
        <div className="projects">
          <div className="projects__tabs">
            {/* <Link className="projects__tab projects__tab--1" to="/projektid/1">Vaata lähemalt</Link> */}
            <Link className="projects__tab projects__tab--1" to="/projektid/ux-analuus">UX-analüüs</Link>
            <Link className="projects__tab projects__tab--2" to="/projektid/veebikujundus">Veebikujundus</Link>
            <Link className="projects__tab projects__tab--3"  to="/projektid/veebiarendus">Veebiarendus</Link>
            <Link className="projects__tab projects__tab--4"  to="/projektid/graafiline-disain">Graafiline disain</Link>
            <Link className="projects__tab projects__tab--5"  to="/projektid/muud-opingud">Muud õpingud</Link>
          </div>
          <Outlet />
          
        </div>
      </section>
    </>
  )
}

export default ProjectsPage