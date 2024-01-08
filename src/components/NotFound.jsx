import React from 'react';

const NotFound = () => {
  return (
    <>
      <h1>Oops! You seem to be lost.</h1>
      <figure>
        <img
          src='./not-found.svg'
          alt='not-found-thumbnail'
          className='img-fluid'
        />
      </figure>
    </>
  );
};

export default NotFound;
