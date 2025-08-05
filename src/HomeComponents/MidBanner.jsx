import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroBanner.css';

const MidBanner = () => {
  return (
    <div className='hero-banner'>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"  
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1752470775376.jpeg"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1749810442746.jpeg"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1752568371450.jpeg"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1752210229166.jpeg"
              alt="Slide 4"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1752481516287.jpeg"
              alt="Slide 5"
            />
          </div>
        </div>

        {/* Prev/Next buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MidBanner;
