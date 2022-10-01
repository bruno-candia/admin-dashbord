import { React } from 'react';
import './activity.css'

import { BsArrowRightShort } from 'react-icons/bs'


import customer from '../../../assets/person_1.jpg'
import customer_2 from '../../../assets/person_2.jpg'
import customer_3 from '../../../assets/person_3.jpg'
import customer_4 from '../../../assets/person_4.jpg'
import customer_5 from '../../../assets/admin_user.jpeg'
export default function Activity({ children }) {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">

        <div className="singleCustomer flex">
          <img src={customer} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Tavares Costa</span>
            <small>Ordered a new transcription</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={customer_2} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Tavares Costa</span>
            <small>Ordered a new transcription</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={customer_3} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Tavares Costa</span>
            <small>Ordered a new transcription</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={customer_4} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Tavares Costa</span>
            <small>Ordered a new transcription</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={customer_5} alt="Customer" />
          <div className="customerDetails">
            <span className="name">Tavares Costa</span>
            <small>Ordered a new transcription</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  );
}
