import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        
       
        <p className="tour-desc" id={`tour-item-para-${id}`}>
          {readMore ? info : info.substring(0, 200)}
        </p>

       
        <button id={`see-more-${id}`} className="toggle-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'See less' : 'See more'}
        </button>

       
        <button 
          id={`delete-btn-${id}`} 
          className="delete-btn" 
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;