import React from "react";
import Feature from "../Features/Feature";
import "./features.css";
const Features = () => {
  const data = [
    {
      title: " NASA",
      text: "The administrator is in charge of NASA. The NASA administrator is nominated by the president and confirmed by a vote in the Senate.,",
    },
  ];
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradiant__text">
          NASA stands for National Aeronautics and Space Administration. NASA is
          a U.S. government agency that is responsible for science and
          technology related to air and space. The Space Age started in 1957
          with the launch of the Soviet satellite Sputnik.
        </h1>
        <p>
          <a href="https://www.nasa.gov/about-nasa/">Read More</a>
        </p>
      </div>
      <div className="features-container">
        {data.map((feature, index) => (
          <Feature
            title={feature.title}
            text={feature.text}
            key={feature.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
