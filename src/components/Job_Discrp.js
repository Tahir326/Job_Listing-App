import React from 'react'
import dayjs from 'dayjs'


function Jobcard(props) {
    // const skills = [ "JAVASCRIPT","REACT","NEXT.JS"]
    const date = dayjs(Date.now());
    const daysdiff= date.diff(props.postedOn,'day')

  return (
    <>
    <div id='jobdiv1' className='jobcard d-flex flex-row justify-content-between  align-items-center ' >
        <div id='jobdiv2'  >
            <p id='jbtitle'>{props.title}-{props.company}</p>
            <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location} </p>
            <div id='jobdiv3' className='d-flex flex-row'>
                {props.skills.map((item) => {
                    return(
                    <p id='jobdiv3_1' >{item}</p> )
                })}

            </div>
        </div>

        <div id='jobdiv4'  className='d-flex flex-row justify-content-center  align-items-center '>
      
                <div id='jobdiv5' className=' text-dark' ><p >Posted <p className='text-dark d-inline' style={{color:'black'}}>{daysdiff}</p> days ago</p></div>
              
                <a href={props.job_link} target='_blank'  rel="noreferrer">
                <div  id='jobdib4_1'>Apply</div>
                </a>

        </div>
    </div>
      
    </>
  )
}

export default Jobcard
