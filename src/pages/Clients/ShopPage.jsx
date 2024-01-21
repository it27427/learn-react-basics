import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/Product/ProductCard';

const ShopPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const BASE_URL = 'https://dummyjson.com/products';
    const data = axios
      .get(BASE_URL)
      .then((res) => setData(res.data.products))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <h1>Shop List</h1>

      <div className='container'>
        <div className='row g-4'>
          {data.map((d, i) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-12' key={d.id}>
                <ProductCard data={d} />
                {console.log(d)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
