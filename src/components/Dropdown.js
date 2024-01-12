import React from 'react'

export default function Dropdown({ JobSearch,jobsrch, setjobsrch, clearFilters, searchPerformed }) {


    const changeoccur =(e)=>{
        setjobsrch((prevstate) =>({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <>
    <div id='mainDD' className='  d-flex flex-row justify-content-center align-items-center  ' >

            <select id='sb1' onChange={changeoccur} name="title" value={jobsrch.title} className=" select    "  >
                <option className='bg-white text-dark dropdown-toggle'  selected hidden>Job Title</option>
                <option >IOS Developer</option>
                <option >Android Developer</option>
                <option >FrontEnd Developer</option>
                <option >BackEnd Developer</option>
            </select>
                        
            <select  onChange={changeoccur} name="type" value={jobsrch.type} className=" select    ">
                <option className='bg-white text-dark dropdown-toggle' selected hidden>Job Type</option>
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Contract</option>
            </select>
            <select  onChange={changeoccur} name="location" value={jobsrch.location} className=" select    ">
                <option className='bg-white text-dark dropdown-toggle' selected hidden>Location</option>
                <option>Remote</option>
                <option>In-Office</option>
                <option>Hybrid</option>
            </select>
              
            <select  onChange={changeoccur} name="experience" value={jobsrch.experience} className=" select     " >
                <option className='bg-white text-dark dropdown-toggle'  selected hidden>Experience</option>
                <option>Fresher</option>
                <option>Junior</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
            </select>
  
        <div className=''>
             <button id='btn1' type="button" className="btn btn-dark  " onClick={JobSearch}>Search</button>
        </div>

    </div>
    {searchPerformed && (
          <div id='btn2div' >
            <button id='btn2' type="button" className="btn btn-dark "  onClick={clearFilters}>Clear</button>
          </div>
    )}
    
    </>
  )
}
