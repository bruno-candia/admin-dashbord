import { React } from 'react';
import Top from './TopSection/Top'

import './body.css'
import Listing from './ListingSection/Listing';
import Activity from './ActivitySection/Activity';

export default function Body({ children }) {
  return (
    <div className="mainContent">
      <Top/>
      <div className="bottom flex">
        <Listing/>
        <Activity/>
      </div>
    </div>
  );
}
