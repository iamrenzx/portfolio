import React from 'react';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';

const Projects: React.FC = () => {
  const arrayOfProjects = [
    {
      image: project1,
      title: 'MyEntrego',
      technologies: ['React JS', 'Ant Design', 'Sass', 'Redux'],
      url: 'https://my.entrego.com.ph/',
    },
    {
      image: project2,
      title: 'Entrego Courier, Express and Parcel',
      technologies: ['React JS', 'Material UI', 'Sass', 'Redux', 'Typescript'],
      url: 'https://parcel.entrego.com.ph/',
    },
  ];

  return (
    <div className="col-12 mt-5">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center mb-0">PROJECTS</h4>
          <h2 className="text-center font-weight-bold">____</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mx-lg-5">
        {arrayOfProjects.map((v) => (
          <div className="col-md-4 h-100" key={v.title + v.technologies.length}>
            <div className="card">
              <img className="card-img-top" src={v.image} alt="Card cap1" />
              <div className="card-body">
                <p className="card-text fw-bold">{v.title}</p>
                <p className="card-text">
                  Technologies Used:
                  <span className="fst-italic">{v.technologies.map((t, index) => (` ${t} ${index === v.technologies.length - 1 ? '' : '/'}`))}</span>
                </p>
                <a href={v.url} className="btn btn-outline-secondary w-100 stretched-link text-decoration-none" target="_blank" rel="noreferrer">
                  View Page
                  {' '}
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
