/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [arrowPosition, setArrowPosition] = useState(false);
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 justify-content-center bg-home align-items-center">
        <div className="col-12 text-center">
          <span className="h3 text-light-primary">Hello,</span>
          <span className="text-primary h3">I&apos;m Renz Delicano.</span>
          <br />
          <span className="h3 text-light-primary">I&apos;m a frontend developer.</span>
          <br />
          <button
            type="button"
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
    </div>
  );
};

export default Home;
