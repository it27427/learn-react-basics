import { Link } from 'react-router-dom';

const showRatingList = (rating) => {
  if (rating === 1) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating >= 1.5 && rating < 2) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-half-s-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating === 2) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating >= 2.5 && rating < 3) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-half-s-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating >= 3.5 && rating < 4) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-half-s-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating >= 4.5 && rating < 5) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-half-s-fill'></i>
          </li>
        </ul>
      </>
    );
  } else if (rating === 5) {
    return (
      <>
        <ul className='ratinglist'>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
          <li className='ratinglist-item'>
            <i className='ri-star-fill'></i>
          </li>
        </ul>
      </>
    );
  }
};

const ProductCard = ({ data }) => {
  return (
    <>
      <div className='card h-100'>
        <figure className='card-thumbnail'>
          <img
            src={data.thumbnail}
            alt={data.thumbnail}
            className='card-img-top'
          />

          <div className='stock'>
            {data.stock === 0 ? (
              <p className='badge rounded-pill text-bg-danger'>Out of Stock</p>
            ) : (
              <p className='badge rounded-pill text-bg-success'>In Stock</p>
            )}
          </div>
        </figure>
        <div>
          <h5 className='product-title'>{data.title}</h5>
          <div className='d-flex align-items-center gap-3'>
            <span className='currentprice'>${data.price}</span>
          </div>
          <div className='rating'>{showRatingList(data.rating)}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
