import React from 'react'
import './FeesContainer.css'
function FeesContainer({fee}) {
  return (
     <div className='fees'>
        
       <div>
        <span className='rupees'><i class="bi bi-currency-rupee"></i></span>
       <span className='rupees'>{fee}</span>
       </div>
      <p>ME/M.Tech</p>
      <p>-First Year Fees</p>
      <div className='compare_fees'>
        <i class="bi bi-arrow-left-right"></i>
        <span >Compare Fees</span>
      </div>
       
     </div>
  )
}

export default FeesContainer
