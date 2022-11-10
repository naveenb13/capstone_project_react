import React from 'react'
import { Link } from 'react-router-dom';
import avatarimg from './images/avatar1.jpg';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand brandbtn" href="/home"><span className='btn4'>OUT<span className='btn3'>colors</span>FIT</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link btn btn-light mx-2 my-1" to={"/home"}><span className='btn1'>Home</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link btn btn-light my-1" to={"/home/suggestions"}><span className='btn1'>Suggestions</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link btn btn-light mx-2 my-1" to={"/home/favourites"}><span className='btn1'>Favourites</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link btn btn-light my-1" to={"/home/dashboard"}><span className='btn1'>Dashboard</span></Link>
            </li>
          </ul>
          <img src={avatarimg} alt='avatar' className="avatar"></img>
          <Link class="btn btn-danger" type="submit" to={"/"}>Logout</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar