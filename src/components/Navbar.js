import React from 'react'
import developer from '../assets/developer.png'

export default function Navbar() {
  return (
    <>
        <nav id='topnav' className="navbar navbar-light  ">
            <div className="container-fluid ">
                <a className="navbar-brand   d-flex flex-row text-white fs-3 fw-bold " href="/">
                <img src={developer} alt="" width="32" height="32" className=" mx-3 jobimg  d-inline-block align-text-top"/>
                <p className='nvbar'>JOB LISTING APP</p>
                </a>
            </div>
        </nav>

        <div id='discrp' className='d-flex flex-column justify-content-center align-items-center   '>
            <p id='pdiscrp' className='text-white fs-1 '>Begin your search for the perfect job opportunity.</p>
            <small id='smll' className='text-white   mb-3'>Find the job that's the ideal match for you.</small>

        </div>
    </>
  )
}
