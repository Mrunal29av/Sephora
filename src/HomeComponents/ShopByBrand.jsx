import React from 'react';
import './ShopByBrand.css';

const brands = [
  {
    name: 'Sephora Collection',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1734955495002.png'
  },
  {
    name: 'Huda Beauty',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1744811092524.png'
  },
  {
    name: 'Rare Beauty',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1734954295077.png'
  },
  {
    name: 'NARS',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1734955245553.png'
  },
  {
    name: 'Milk Makeup',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1734955269109.png'
  },
  {
    name: 'Sol de Janeiro',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/original/theme-image-1734955316374.png'
  }
];

const trendingImages = [
  'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:600/theme-image-1752469670215.jpeg',
  'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:600/theme-image-1752469608761.jpeg',
  'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:600/theme-image-1752146870599.jpeg'
];

const ShopByBrand = () => {
  return (

    <div className='shop-brand-section'>

      <h2 className='section-title'>Shop by brand</h2>
      <div className='brand-logos'>
        {brands.map((brand) => (
          <div className='brand-card'>

            <img src={brand.img} alt={brand.name} />
          </div>
        ))}
      </div>

      <h2 className='section-title'>Trending Now</h2>

      <div className='trending-images'>
        {trendingImages.map((trendingimage, index) => (
          <img key={index} src={trendingimage} className='trending-img' />



        ))}

      </div>
    </div>
  )
}


export default ShopByBrand;

