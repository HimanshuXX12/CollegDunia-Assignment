import React from 'react'
import './Ranking.css'
function Ranking({ranking}) {
  return (
    <div>
      <div className='ranker_main'>#{ranking}<sup>th</sup>/<span className='ranker'>300</span> in india</div>
      <div  className='nirf_main'>
         <img className='nirf_image' src='https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?mode=stretch'/>
         <span className='year'>2024</span>
      </div>
      <div></div>
    </div>
  )
}

export default Ranking
