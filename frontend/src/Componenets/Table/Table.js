import React, { useState } from 'react'
import './Table.css'
import LogoBlock from '../LogoBlock/LogoBlock'
import FeesContainer from '../FessContainer/FeesContainer'
import Packages from '../packages/Packages'
import UserRating from '../UserRating/UserRating'
import Ranking from '../Ranking/Ranking'
import { useEffect } from 'react'
function Table({data,field}) {

  const [updatted_data,setUpdatted_Value]= useState(data);
    const [intial_rows,setintial_rows]= useState(10);
     const [sliced_data,setSlideData]= useState(data.slice(0,intial_rows));

     useEffect(() => {
      setSlideData(data.slice(0, intial_rows));
    }, [intial_rows]);

    useEffect(()=>{
      setSlideData(data);
    },[data]);
  

     const loadmore=()=>{
        setintial_rows((prev)=>prev+10);
     }

     console.log("data in table.js",data);
     console.log("slidedata in table.js",sliced_data);


     const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        loadmore();
      }
    };
  
    // Add scroll event listener
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <div className='table_page'>
         <table className="custom-table">
      <thead>
        <tr>
          <th className='heading_block'>CollegeDunia ID</th>
          <th  className="heading_block">Colleges</th>
          <th  className="heading_block">Course Fees</th>
          <th  className="heading_block">Placements</th>
          <th  className="heading_block">User Reviews</th>
          <th  className="heading_block">Ranking</th>
        </tr>
      </thead>
      <tbody>
        {sliced_data.map((row, id) => (
          <tr key={id}>
            <td id="college_dunia_id">#{row.id}</td>
            <td><LogoBlock value={row.image_url} name={row.collge_Name} key={row.id} branch={row.branch} id={row.id}/></td>
            <td className='fees_bigger_contaier'><FeesContainer fee={row.fees} key={row.id}/></td>
            <td className='fees_bigger_contaier' ><Packages highest={row.Highest_Package} average={row.Average_Package} key={row.id}/></td>
            <td className='fees_bigger_contaier'><UserRating rating={row.user_rating} users={row.users}/></td>
            <td className='fees_bigger_contaier'><Ranking ranking={row.Ranking}/></td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </div>
  )
}

export default Table
