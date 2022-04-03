
import React, { useEffect, useState } from 'react';

import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const[d ,setd] = useState(null);
  const [total,settotl] = useState(0
    
  )

    const ju =(cc)=>{
      console.log(cc)
   
  }
  const nav = useNavigate()

  const pu = ()=>{
    nav("/")
  }

  const car = useSelector((sate)=>sate.da);

  useEffect(()=>{

  if(car !== null){
    setd(car)
     let jo = 0

    car.forEach(da => {

      jo += da.price
    });

    console.log(jo)
    ju(jo)
    settotl(jo)
   
  }
  else{
    console.log("nope!")
  }
  },[car]);

  console.log(car);
  
  return (
    <>
<nav className=' grey darken-3'>
    <div class="nav-wrapper   grey darken-3 container">
      <a href="#" class="brand-logo">GKART</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a className='material-icons' onClick={pu}>apps</a></li>
      </ul>
    </div>
  </nav>

        <div className='container'>
      
          <div className='f'>
            {d !== null && d.map((da,ke)=><div className='fc'>
              <img className='im' src={da.image} alt="img" width="100px" height="100px"/>
               <h2 className='n' key={ke}>{da.name}</h2>
               <h5> QTY : {da.nos}</h5>
               <h4 className='n'> ₹ {da.price}/-</h4>
               
               <div className='s'> 
                 <div className='s1'>
                   <p>{da.rating}<i className='material-icons tiny'>star</i></p>
                 </div>
                 <div className='s2'>
                   <a href='/'>
<button className='btn red'

                > <i className='material-icons bb' href="/">cancel</i></button>
                   </a>

               
                 </div>
               </div>
               
</div>)}


          </div>

    <div className='t'>
      <div className='t1'>
        <h1>
           TOTAL PRICE = ₹ {total}/-
        </h1>
       
      </div>
     
    </div>
            
        </div>



    </>
    


  )
}

export default Cart