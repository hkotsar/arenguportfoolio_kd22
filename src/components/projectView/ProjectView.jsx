import React from 'react'
import '../projectView/projectView.scss';
import { Link } from 'react-router-dom';

const ProjectView = ({ title, img, content, links, techList }) => {
    console.log(links)

  return (
    <div className="details">
      <div class="padding-top">
            <img class="details__img" src={`${process.env.REACT_APP_URL}/${img}`} alt={title} />
       </div>
       <div class="details__content">
            <h1>{title}</h1>
            <p className="paragraph">{content}</p>
            <div class="details__links">
                {links.map((link) => {
                    return (
                        <Link className="btn details__link" target="_blank" rel="noopener noreferrer" to={link.link}>
                            <span>{link.name}</span>
                            <svg class="details__link--icon">
                                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-keyboard_arrow_right`}></use>
                            </svg> 
                        </Link>
                    )
                })}
            </div>
            <div className="details__tech">
                <h1>Kasutatud tehnoloogiad</h1>
                <div class="details__tech--list">
                    {techList.map((tech) => {
                        return (
                            <div class="details__tech--item">
                                <span>{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default ProjectView
