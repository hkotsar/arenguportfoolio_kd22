import React, { useContext } from 'react';
import ProjectsContext from '../../context/projects';
import { Link } from 'react-router-dom';

const Tab5 = () => {
  const data = useContext(ProjectsContext)

  return (
    <div className="projects__content">
        <h1 class="projects__content--heading tab--5">Muud õpingud</h1>
        <div className="projects__list">
            {
              data.school.map((item) => (
                <div className="card__item">
                  <img className="card__item--img" src={`${process.env.REACT_APP_URL}/${item.image}`} alt={item.title} />
                  <svg class="card__item--icon">
                      <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#${item.icon}`}></use>
                  </svg>
                  <div class="card__content">
                      <h1 class="card__item--title">{item.title}</h1>
                      <p class="card__item--text">
                          {item.subtext}
                      </p>
                  </div>
                  <div class="card__link">
                    { item.category === 'vota' ? "" : <Link className="card__item--link" to={`/opingud/${item.id}`}>Vaata lähemalt</Link>}
                  </div>
              </div>
              ))
            }
        </div>
    </div>
  )
}

export default Tab5
