import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import "../styles/App.css";

const API_URL = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toursList, setToursList] = useState([]);

  
  const handleRemoveTour = (id) => {
    const updatedTours = toursList.filter((tour) => tour.id !== id);
    setToursList(updatedTours);
  };

  
  const fetchToursData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setIsLoading(false);
      setToursList(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };


  useEffect(() => {
    fetchToursData();
  }, []);

  
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (toursList.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="refresh-btn" onClick={() => fetchToursData()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours toursData={toursList} removeTour={handleRemoveTour} />
    </main>
  );
};

export default App;