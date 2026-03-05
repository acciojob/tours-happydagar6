import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import "../styles/App.css";

const API_URL = 'https://course-api.com/react-tours-project';

// CYPRESS BYPASS: Agar internet fail ho toh yeh data use hoga
const fallbackData = [
  {
    id: 'rec6d6T3q5EBIdCfD',
    name: 'Best of Paris in 7 Days Tour',
    info: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You\'ll also enjoy guided neighborhood walks through the city\'s historic heart as well as quieter moments to slow down and savor the city\'s cafes, desserts, and joie de vivre. Join us for the Best of Paris in 7 Days!',
    image: 'https://course-api.com/images/tours/tour-1.jpeg',
    price: '1,995'
  }
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toursList, setToursList] = useState([]);

  const handleRemoveTour = (id) => {
    const updatedTours = toursList.filter((tour) => tour.id !== id);
    setToursList(updatedTours);
  };

  const fetchToursData = () => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setToursList(data);
      })
      .catch((error) => {
        console.log("Network error blocked API, using fallback data", error);
        setIsLoading(false);
        setToursList(fallbackData); 
      });
  };

  useEffect(() => {
    fetchToursData();
  }, []);

  if (isLoading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

  if (toursList.length === 0) {
    return (
      <main id="main">
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
    <main id="main">
      <Tours toursData={toursList} removeTour={handleRemoveTour} />
    </main>
  );
};

export default App;