import React from 'react';
import './projectCard.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ url, title, image, subtext, icon }) => {
   

  return (
    <div className="card__item">
        <img className="card__item--img" src={`${process.env.REACT_APP_URL}${image}`} alt={title} />
        <svg class="card__item--icon">
            <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#${icon}`}></use>
        </svg>
        <div class="card__content">
            <h1 class="card__item--title">{title}</h1>
            <p class="card__item--text">
                {subtext}
            </p>
        </div>
        <div class="card__link">
            <Link className="card__item--link" to={`/projektid/${url}`}>Vaata lähemalt</Link>
        </div>
    </div>
  )
}

export default ProjectCard
