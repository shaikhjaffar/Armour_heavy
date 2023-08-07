import React from 'react'
import Image1 from '../assets//headerImage.png'
import Image2 from '../assets/Group 56.png'
import Image3 from '../assets/Group 59.png'
export default function FirstProduct() {
  return (
    <div className='first_Product_wrap'>
        <div className='heading_wrap'>
        <h2 style={{fontSize:"2rem"}}>OUR TOP SELLERS</h2>
     <p>Best Curated Collection for those who dare to live!</p>
        </div>
        <div className='product_1_wrap'>
             <img style={{width:"100%",height:"100%"}} src={Image1} alt='headerimage'/>
   

        </div>
    

    </div>
  )
}
