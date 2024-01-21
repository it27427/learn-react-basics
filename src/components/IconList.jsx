import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const IconList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul className='iconlist'>
        <li className='iconlist-item'>
          <button type='button' className='iconlist-link cartlink'>
            <span className='icon'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                ></path>
              </svg>
            </span>

            <span className='counter'>0</span>
          </button>
        </li>

        {!isLoggedIn ? (
          <li className='iconlist-item'>
            <button type='button' className='btn-sign'>
              <span className='icon'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  height='20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'></path>
                </svg>
              </span>

              <span className='text d-none d-md-block'>Sign in</span>
            </button>
          </li>
        ) : (
          <li className='iconlist-item'>
            <button type='button' className='iconlist-link'>
              <span className='icon'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 496 512'
                  height='24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z'></path>
                </svg>
              </span>
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default IconList;
