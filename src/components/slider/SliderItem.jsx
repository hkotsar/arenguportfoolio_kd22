import React from 'react'
import { Link } from 'react-router-dom'

const SliderItem = ({ project }) => {
  const { id, title, subtext, image } = project;

  return (
    <div className="slider__item">
      <img className="slider__item--img" src={image} alt={title} />
      <div className="slider__item--content">
          <h1>{title}</h1>
          <p>{subtext}</p>
      </div>
      <div className="slider__div">
          <Link to={`/projektid/${id}`} className="btn slider__item--link">Vaata lähemalt</Link>
      </div>
    </div>
  )
}

export default SliderItem
