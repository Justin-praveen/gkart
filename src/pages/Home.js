import React, { useEffect, useState } from 'react';
import data from  "../data.json";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';


const Home = ({itm,se}) => {

  const send = useDispatch();

  const[q,setq] = useState(1);

  console.log(q)


  const nav = useNavigate();

  const push = ()=>{
    nav("/cart")
  }

 

  const[count,setcount] = useState([]);

useEffect(()=>{
  if(count === null){
    alert("cart is empty")
  }else{
   
    let i = document.getElementById("in");
                i.value = ""
    
    console.log(count)
  }

},[count])

    console.log(data)
    console.log(q)
  return (
    <div>

<nav className=' grey darken-3'>
    <div class="nav-wrapper  grey darken-3 container">
      <a href="#" class="brand-logo">GKART</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a className='material-icons' onClick={push}>add_shopping_cart</a></li>
    
      </ul>
    </div>
  </nav>

        <div className='container'>
      
          <form className='f'>
            {data.map((da,ke)=><div className='fc'>
              <img className='im' src={da.image} alt="img" width="100px" height="100px"/>
               <h4 className='n' key={ke}>{da.name}</h4>
               <h4 className='n'> ₹ {da.price}/-</h4>
               <input onChange={((e)=> setq(e.target.value))} id="in" placeholder="Qty" required/>
               <div className='s'> 
                 <div className='s1'>
                   <p>{da.star}<i className='material-icons tiny'>star</i></p>
                 </div>
                 <div className='s2'>
<button type='submit'  className='btn' onClick={()=>{

                 if(q !== 0){
                 send({
                   type : "cart",
                   datas : [...count,{ids :da.id,
                    name : da.name,
                    price : q * da.price,
                    nos : q,
                    rating : da.star,
                    image : da.image
                  }]
                 })
                  
                 setcount([...count,{ids :da.id,
                  name : da.name,
                  price :q*  da.price,
                  rating : da.star,
                  image : da.image,
                  nos : q,
                }])

                alert("Added Sucessfully...!")

                

                setq(1);
                 }
                 else{
                   alert("PLEASE SELECT QTY")
                 }


               }}> <i className='material-icons bb'>add_shopping_cart</i>Add</button>
               
                 </div>
               </div>
               
</div>)}
          </form>

    
            
        </div>
        
    </div>
  )
}

export default Home