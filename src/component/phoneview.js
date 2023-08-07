import React from 'react'
import team from '../assets/productimg-removebg-preview.png'
import Image1 from '../assets/better_1.png'
import Image2 from '../assets/better_2.png'
export default function Phoneview() {
  return (
    <div className='phone_view_main_wrap'>
         
         <div className='discountwrap_mobile'>
           
      <div className='discount_content'>
        <span className='upto'>Up Too</span>
        <span className='fifty'>50</span>
        <span className='percent'>%</span>
        <span className='off'>Off</span>
        <span className='slecttyle'><i>Select your Style</i></span>
        <button className='viewall'>Shop Now</button>

      </div>
      <img className='bigimageMobile' src={team} alt='bigimg'/>

     
     
      </div>
      <div className='card_wrap'>
      <div className='prduct_card'>
                <img src={Image1} alt='image1'/>
                <p>HEAVY GREY AH CLASSIC POLO</p>
                <p>$40.00 <strike>$65.00</strike>(save : $15.00)</p>
                </div>
                <div className='prduct_card'>
                <img src={Image2} alt='image1'/>
                <p>HEAVY GREY AH CLASSIC POLO</p>
                <p>$40.00 <strike>$65.00</strike>(save : $15.00)</p>
                </div>
                </div>
                <button className='viewall' style={{maxWidth:"120px"}}>View All</button>
      
 
    </div>
  )
}
