import React from 'react'
import './Packages.css'
function Packages({average,highest}) {
  return (
    <div className='package'>
          <div>
        <span className='rupees'><i class="bi bi-currency-rupee"></i></span>
       <span className='rupees'>{average}</span>
       </div>
       <p>Average Package</p>
       <div>
        <span className='rupees'><i class="bi bi-currency-rupee"></i></span>
       <span className='rupees'>{highest}</span>
       </div>
       <p>Highest Package</p>
       <div className='compare_fees'>
        <i class="bi bi-arrow-left-right"></i>
        <span >Compare Fees</span>
      </div>
      
    </div>
  )
}

export default Packages
