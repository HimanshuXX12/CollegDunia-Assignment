import React, { useState } from 'react'
import './Home.css'
import data from '../../Data.js'
import Table from '../../Componenets/Table/Table.js';


console.log(data);
function Home() {
  const [field,setnewfield]= useState(null);
  const [updatted_data,setUpdatted_Value]= useState(data);
    const nameHandller=  async (e)=>{
        const value=e.target.value;
        console.log(value);
       if(!value)
       {
          setUpdatted_Value(data);
       }
       else
       {
        const  new_data= await updatted_data.filter((item=>item.collge_Name===value));
        console.log("new data",new_data);
        setUpdatted_Value(new_data);
       }
    }
      
   const  OnchangeHandller=  (e)=>{
          const fielder=e.target.value;
          let ans;
            setnewfield(e.target.value);
             ans=sortArraydescending(updatted_data,fielder);
          
            console.log("ans",ans);
            console.log("field",fielder);
            setUpdatted_Value(ans);
  }

   const keyhandller=(e)=>{
    console.log("running");
      if(e.key=="Enter")
      {
        nameHandller(e);
      }
   }

 
  function sortArrayByField(array, field,condition) {
    return array.sort((a, b) => {
        
        if (a[field] < b[field]) {
            return -1; // a comes before b
        }
        if (a[field] > b[field]) {
            return 1; // a comes after b
        }
        return 0; // a and b are equal
    });
}

function sortArraydescending(array, field) {
  return array.sort((a, b) => {
      
      if (a[field] < b[field]) {
          return 1; // a comes before b
      }
      if (a[field] > b[field]) {
          return -1; // a comes after b
      }
      return 0; // a and b are equal
  });
}


   
   console.log(updatted_data);

   

  return (
    <div className='home'>
       <div className='upper_home'>
          <h1 className='found'>Found {data.length} Collges</h1>
          <div>
               <input className='input' placeholder='Enter College Name' onKeyDown={keyhandller}  onChange={nameHandller} type="text"/>
            </div>
          <div className='hommer'>
            <div className='sort label '>SortBy</div>
           
            <div className='combine'>
              <input type='radio' name="radio" id="popularity"  checked={field=="user_rating"}  value="user_rating" onChange={OnchangeHandller}/>
              <label className='label' htmlFor='popularity'>Popularity</label>
            </div>
            <div className='combine'>
              <input type='radio' name="radio" id="rating" value="rating" checked={field=="rating"}  onChange={OnchangeHandller} />
              <label className='label' htmlFor='rating'  >Rating</label>
            </div>
            <div className='combine'>
                <input type='radio' name="radio" id="Highest" value="Highest_Package" checked={field=="Highest_Package"} onChange={OnchangeHandller}  />
                <label className='label' htmlFor='Highest'  >Highest Package</label>
            </div>
            <div className='combine'>
                <input type='radio' name="radio" id="Lowest"  value="Average_Package" checked={field=="Average_Package"} onChange={OnchangeHandller}/>
                <label className='label' htmlFor='Lowest'  >Average Package</label>
            </div>
          </div>
       </div>
      <Table data={updatted_data} field={field} />
    </div>
  )
}

export default Home
