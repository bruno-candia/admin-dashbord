import { React } from 'react';
import './listing.css'

import {
  BsArrowRightShort
} from 'react-icons/bs'

import {
  AiFillHeart,
  AiOutlineHeart
} from 'react-icons/ai'

import images_2 from '../../../assets/images_2.png'
import person_1 from '../../../assets/person_1.jpg'
import person_2 from '../../../assets/person_2.jpg'
import person_3 from '../../../assets/person_3.jpg'
import person_4 from '../../../assets/person_4.jpg'


export default function Listing({ children }) {
  return (
    <div className="listingSection">

      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={images_2} alt="Circle with aurem logo on center" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={images_2} alt="Circle with aurem logo on center" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={images_2} alt="Circle with aurem logo on center" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={images_2} alt="Circle with aurem logo on center" />
          <h3>Annual Vince</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={person_1} alt="User" />
              <img src={person_2} alt="User" />
              <img src={person_3} alt="User" />
              <img src={person_4} alt="User" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={person_3} alt="User" />
              <img src={person_1} alt="User" />
              <img src={person_4} alt="User" />
              <img src={person_2} alt="User" />
            </div>
            <div className="cardText">
              <span>
                28,55 Plant sold <br />
                <small>
                  15 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
