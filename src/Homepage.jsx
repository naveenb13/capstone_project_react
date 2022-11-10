import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Homepage() {
  return (
    <>
      <div className='page1'>
        <Navbar></Navbar>
        <div className='homecontent'>
          <h1 className='bg-light homeheading'>&nbsp;Make your day Colourful&nbsp;</h1>
          <h1 className='text-light homeheading2'>&nbsp;with a Right Choice&nbsp;</h1>
        </div>
        <h4 className='subheading'>We provide you Attractive Colours for your Outfits<br /><span className='text-light'>which matches your Mood for the Day.</span></h4>
        <h3><b>Tap here for your today's Colour suggestion</b>&nbsp;&nbsp;<div className='btn2'><Link className='btn btn-light' to={"/home/suggestions"}><span className='btn1'>Suggestions</span></Link></div></h3>
        <br />
        <h3><b>Tap here to choose your favourite Colours</b>&nbsp;&nbsp;<div className='btn2'><Link className='btn btn-light' to={"/home/favourites"}><span className='btn1'>Favourites</span></Link></div></h3>
      </div>
    </>
  )
}

export default Homepage