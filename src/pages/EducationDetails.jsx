import React, { useContext }  from 'react';
import ProjectsContext from '../context/projects';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import './education.scss';

const EducationDetails = () => {
    const { id } = useParams();
    const data = useContext(ProjectsContext)

    const item = data.school.find((p) => p.id === Number(id))
    

  return (
    <>
        <Header sticky={'header__sticky'} logoNone={'none'} />
        <section className="section-1">
            <h1 className="title-0">{item.title}</h1>
            <div class="container0">
                {item.subjects.map((subject) => (
                    <div className="group0">
                        <h1 className="title-1">{subject.title}</h1>
                        <p className="text0">{subject.content}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default EducationDetails
