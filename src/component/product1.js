import React from 'react'
import Image1 from '../assets/product1.png'
export default function Product1() {
  return (
    <div className='product1_main_wrap'>
   <img src={Image1} alt=''/>
   <div className='prodcuct1_content'>
    <h3 style={{fontSize:"2.5rem",paddingBottom:"1em"}}>To WIN be in AH always!</h3>
    <p style={{paddingBottom:"1.5em"}} >AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag us on Instagram to win exciting gift vouchers worth Rs 5,000!</p>
    <button className='viewall'>Know more</button>
   </div>

    </div>
  )
}
