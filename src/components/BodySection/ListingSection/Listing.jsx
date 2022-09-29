import { React } from 'react';
import './listing.css'

export default function Listing({ children }) {
  return (
    <>
      <h1>Listing</h1>
      {children}
    </>
  );
}
