import { React } from 'react';
import './top.css'

import { BiSearchAlt } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { TbMessageCircle } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';

import user from '../../../assets/admin_user.jpeg'
import images_1 from '../../../assets/images_1.png'
import video from '../../../assets/123_Trim.mp4'

export default function Top({ children }) {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Aurem.</h1>
          <p>Hello Bruno, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search on Dashboard' />
          <BiSearchAlt className='icon' />
        </div>


        <div className="adminDiv flex">
          <TbMessageCircle class='icon' />
          <IoNotificationsOutline className='icon' />
          <div className="adminImage">
            <img src={user} alt="Admin User" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are<br /> natural made products!</p>

          <div className="buttons flex">
            <button className="btn">
              Explore More
            </button>
            <button className="btn transparent">
              Top Sellers
            </button>
            <div className="videoDiv">
              <video src={video} autoPlay loop muted></video>
            </div>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Got to my orders <BsArrowRightShort className='icon' />
              </span>


            </div>

            <div className="imgDiv">
              <img src={images_1} alt="Persona" />
            </div>

            {/* We shall use this card later... */}
            {/* <div className="sideBarCard">
              <BsQuestionCircle className='icon' />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Aurem, please contact us from for more question.</p>
                <button className="btn">Go to help center.</button>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
