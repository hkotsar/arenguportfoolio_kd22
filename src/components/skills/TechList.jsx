import React from 'react';
import TechItem from './TechItem';
import '../skills/tech.scss';

const TechList = () => {
    const techList = [
      {
        id: 1,
        name: 'Figma',
        icon: 'icon-figma',
        dots: 5,
      },
      {
        id: 2,
        name: 'HTML',
        icon: 'icon-html5',
        dots: 5
      },
      {
        id: 3,
        name: 'CSS/Sass',
        icon: 'icon-css3',
        dots: 5,
      },
      {
        id: 4,
        name: 'Javascript',
        icon: 'icon-javascript',
        dots: 4,
      },
      {
        id: 5,
        name: 'React.js',
        icon: 'icon-react',
        dots: 3,
      },
      {
        id: 6,
        name: 'Node.js/Express.js',
        icon: 'icon-node-dot-js',
        dots: 3,
      },
      {
        id: 7,
        name: 'Wordpress',
        icon: 'icon-wordpress',
        dots: 4,
      },
      {
        id: 8,
        name: 'PHP',
        icon: 'icon-php',
        dots: 2,
      },
      {
        id: 9,
        name: 'Illustrator',
        icon: 'icon-adobeillustrator',
        dots: 2,
      },
      {
        id: 10,
        name: 'Photoshop',
        icon: 'icon-adobephotoshop',
        dots: 2,
      }
    ];
    
  return (
    <div className="tech__list">
      {techList.map((tech) => (
           <TechItem key={tech.id} tech={tech} />       
      ))}
    </div>
  )
}

export default TechList
