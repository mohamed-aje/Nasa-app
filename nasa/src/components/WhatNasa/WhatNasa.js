import React from "react";
import Feature from "../Features/Features";
import "./whatNasa.css";
const WhatNasa = () => {
  return (
    <div className="whatnasa section__margin" id="whatnasa">
      <div className="whatnasa-feature">
        <Feature
          title="Nasa"
          text="NASA stands for National Aeronautics and Space Administration. NASA is a U.S. government agency that is responsible for science and technology related to air and space. The Space Age started in 1957 with the launch of the Soviet satellite Sputnik."
        />
      </div>
      <div className="whatnasa-heading">
        <a href="#library">
          <p>Explore the library</p>
        </a>
      </div>
    </div>
  );
};

export default WhatNasa;
