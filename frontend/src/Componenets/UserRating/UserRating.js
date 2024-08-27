import React from 'react'
import './UserRating.css'
function UserRating({rating,users}) {
  return (
    <div>
      <div className='collection'>
         <span> <button className='btn'></button></span>
        <span>{rating}/5</span>
      </div>
      <div className='reviews'>
         Based On {users} User <br/> Reviews
      </div>
      <div className='collection' id="collection">
        <span><i class="bi bi-check"></i></span>
        <span>Best In Academics</span>
        <span><i class="bi bi-chevron-down"></i></span>
      </div>
    </div>
  )
}

export default UserRating
