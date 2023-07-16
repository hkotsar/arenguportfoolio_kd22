import React, { useState } from 'react';
import '../slider/slider.scss'
import SliderItem from './SliderItem';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const project = [
    {
      id: 2,
      title: 'Avasta Tartut',
      subtext: 'Aasta tegija võistlus 2023. 1.koht UX/UI disainerite kutsevõistlustel.',
      icon: 'icon-figma',
      image: '../../arenguportfoolio/images/avasta_tartut.jpg'
    },
    {
      id: 4,
      title: 'UX/UI disaini portfoolio',
      subtext: 'UX/UI disaineri erialal (Tartu Rakenduslik Kolledž) õpingute raames loodud portfoolio',
      icon: 'icon-embed2',
      image: '../../arenguportfoolio/images/arenguportfoolio.jpg'
    },
    {
      id: 123,
      title: 'Heikki Mägi koduleht',
      subtext: 'Frillice juhile personaalne koduleht. Disain ja arendus (Figma, Wordpress).',
      icon: 'icon-wordpress',
      image: '../../arenguportfoolio/images/wordpress.png'
    },
  ];



  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? project.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === project.length - 1 ? 0 : prevSlide + 1));
  };

  

  return (
        <>
          <div className="slider">
              
                  {project.map((project, index) => (
                      <div
                          key={project.id}
                          className={`slider__slide ${index === currentSlide ? 'active' : ''}`}
                          style={{ transform: `translateX(${100 * (index - currentSlide)}%` }}
                      >
                      {/* Slide logic
                          `translateX(${100 * (i - s)}%`
                            `translateX(${100 * (index - currentSlide)}%`
                      */}

                        <SliderItem key={project.id} project={project} />
                      </div>
                  ))}
              
          </div>
          <div class="center">
              <button onClick={handlePrevSlide} aria-label="left arrow" class="slider__btn slider__btn--left">
                  <svg class="slider__btn--icon">
                      <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-keyboard_arrow_left`}></use>
                  </svg>
              </button>
              <button onClick={handleNextSlide} aria-label="right arrow"  class="slider__btn slider__btn--right">
                  <svg class="slider__btn--icon">
                      <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-keyboard_arrow_right`}></use>
                  </svg>
              </button>
          </div>
        </>
  );
};

export default Slider;