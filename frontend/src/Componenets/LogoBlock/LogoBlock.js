import React from 'react'
import './LogoBlock.css'
function LogoBlock({value,name,branch,id}) {
    const cutoff=Math.floor(Math.random() * 361);
  return (
    <div>
       <div className='head-container'>
          <div>
            <img className='imagger' src={value}/>
          </div>
          <div>
            <div className='college_name_block'>{name}</div><br/>
            <div className='cutoff-main'>
                {branch? <span className='branch'>
                     {branch}
                 </span>:<></>} <br/>
                 <span className='cutoff-actual'>
                    JEE-Main 2024 Cutoff : {cutoff}
                     </span>
            </div>
          </div>
       </div>
       <div className='logo-tail'>
         <div className='apply_now_main'>
            <span className='apply_now flex items-center' id="arrow"><i class="bi bi-arrow-right"></i></span>
            <span className='apply_now'>Apply Now</span>
         </div>
         <div className='apply_now_main'>
            <span><i class="bi bi-download"></i></span>
            <span className='brouchure'>Download Brochure</span>
         </div>
         <div className='apply_now_main'>
            <input type='checkbox' id={`checkbox${id}`}/>
            <label htmlFor={`checkbox${id}`} className='compare'>Add to Compare</label>
         </div>
       </div>
    </div>
  )
}

export default LogoBlock
