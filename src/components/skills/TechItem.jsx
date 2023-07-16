import React from 'react'
import '../skills/tech.scss';

const TechItem = ({ tech }) => {
    const { name, icon, dots } = tech;

    const dotArr = []
    const dot = (
        <svg class="tech__score--icon">
            <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-dot-circle-o`}></use>
        </svg>
    )

    for (let i = 0; i < dots; i++) {
        dotArr.push(dot)
    }

  return (
    <div className="tech">
        <div class="tech__logo">
            <svg class="tech__logo--icon">
                <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#${icon}`}></use>
            </svg>
        </div>
        <span>{name}</span>
        <div class="tect__score">
            {dotArr}
        </div>  
    </div>
  )
}

export default TechItem
