import React from 'react';
import './ShopCategoriesSection.css';
import { Link } from 'react-router-dom';

const categoryButtons = [
  { label: "NEW ARRIVALS", path: "/newarrival" },
  { label: "HOT & HAPPENING", path: "/hothappening" },
  { label: "BEAUTY UNDER 999", path: "/beautyunder99" },
  { label: "BESTSELLERS", path: "/bestsellers" },
  { label: "BEST OF MAKEUP", path: "/bestofmakeup" },
  { label: "EVERYDAY ESSENTIALS", path: "/everydayessential" }
];

const categories = [
  {
    label: "MAKEUP",
    img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1698831550639.png"
  },
  {
    label: "EYEBROWS",
    img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1698831659772.png"
  },
  {
    label: "SKINCARE",
    img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1698831864661.png"
  },
  {
    label: "FOUNDATION",
    img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1698831896299.png"
  },
  {
    label: "FRAGRANCE",
    img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1698831940409.png"
  },
  {
    label: "HAIRCARE",
    img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1698831966121.png"
  }
];

const ShopCategoriesSection = () => {
  return (
    <section className="shop-categories-section">
      {/* Category Buttons with Routing */}
      <div className="category-buttons">
        {categoryButtons.map((btn, index) => (
          <Link to={btn.path} >
            <button>{btn.label}</button>
          </Link>
        ))}
      </div>

      {/* Category Image Grid */}
      <div className='shop-categories-container'>
        <h2 className="section-title">Shop Categories</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <div className="category-card">
              <img src={cat.img} alt={cat.label} />
              <p>{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategoriesSection;
