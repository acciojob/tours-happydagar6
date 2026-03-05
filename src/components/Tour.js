import React, { useState } from 'react';

// Props mein se saari details aur remove karne wala function nikal liya
const Tour = ({ id, image, info, price, name, removeTour }) => {
  // State jo track karegi ki pura text dikhana hai ya nahi
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        
        <p className="tour-desc">
          {/* Agar readMore true hai toh pura text, warna sirf 200 characters */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          
          <button className="toggle-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See Less' : 'Show More'}
          </button>
        </p>

        {/* Delete button jo click hone par apni ID parent ko bhej dega */}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;