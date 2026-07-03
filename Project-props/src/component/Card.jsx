import React from 'react'

const Card = (props) => {
  return (
          <div className="card">
        <div>
          <div className="top">
          <img src={props.logo} alt="logo" />
          <button>Save <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg></button>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.daysago}</span></h3>
          <h2>{props.posts}</h2>
          <div className='tag'>
            <h4>{props.tags3}</h4>
            <h4>{props.tags4}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.payHours}</h3>
            <p>{props.location}</p>
          </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
