/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef, useState, MutableRefObject } from 'react';
import Projects from '../projects';

const Home: React.FC = () => {
  const [arrowPosition, setArrowPosition] = useState(true);
  const myRef = useRef() as MutableRefObject<HTMLDivElement>;
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 justify-content-center bg-home align-items-center">
        <div className="col-12 text-center">
          <span className="h3 text-light-primary">Hello, </span>
          <span className="text-primary h3">I&apos;m Renz Delicano.</span>
          <br />
          <span className="h3 text-light-primary">I&apos;m a frontend developer.</span>
          <br />
          <button
            type="button"
            onClick={executeScroll}
            className="mt-3 btn btn-outline-secondary btn-lg"
            onMouseOver={() => setArrowPosition(false)}
            onMouseLeave={() => setArrowPosition(true)}
          >
            View my work
            {' '}
            <i className={`fa ${arrowPosition ? 'fa-arrow-right' : 'fa-arrow-down'} `} />
          </button>
        </div>
      </div>
      <div className="row justify-content-center h-100" ref={myRef}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
