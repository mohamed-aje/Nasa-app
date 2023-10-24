import React, { useEffect, useState } from "react";
import NasaApiService from "../../services/podService";
import "./pod.css";

const App = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await NasaApiService.getAstronomyPictureOfTheDay();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching data from NASA API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="blog-container_article" id="pod">
      <h1>Nasa Picture of the Day </h1>
      {apodData ? (
        <>
          <div className="blog-container_article-image">
            <img src={apodData.hdurl} alt={apodData.title} />
          </div>
          <div className="blog-container_article-content">
            <div>
              <p>{apodData.date}</p>
              <h3>{apodData.title}</h3>
              <p>{apodData.explanation}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
