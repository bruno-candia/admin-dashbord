import { React } from 'react';
import './sidebar.css'
import './sidebar.scss'

// Imported Images ==>
import logo from '../../assets/aurem_logo.svg'

// Imported Icon ==>
import { IoMdSpeedometer } from 'react-icons/io'
import { 
  MdDeliveryDining, 
  MdOutlineExplore, 
  MdOutlinePermContactCalendar 
} from 'react-icons/md'
import { 
  BsCreditCard2Front, 
  BsTrophy,
  BsQuestionCircle 
} from 'react-icons/bs'
import { BiTrendingUp } from 'react-icons/bi'
import { AiOutlinePieChart } from 'react-icons/ai'


export default function SideBar({ children }) {
  return (
    <div className="sideBar grid">

      <div className="logoDiv flex">
        <img src={logo} alt="Logo Aurem" />
        {/* <h2>Aurem.</h2> */}
      </div>

      <div className="menuDiv">
        <div className="divTitle">
          QUICK MENU
        </div>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dash board
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <div className="divTitle">
          SETTINGS
        </div>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#Home" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Aurem, please contact us from for more question.</p>
          <button className="btn">Go to help center.</button>
        </div>

      </div>

    </div>
  );
}
