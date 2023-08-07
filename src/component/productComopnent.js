import React from 'react'
import Image1 from '../assets/better_1.png'
import Image2 from '../assets/better_2.png'
import Image3 from '../assets/better_3.png'
import Image4 from '../assets/betterdiscount.png'
export default function ProductComponent() {
  return (
    <>
  
  
    <div className='product_main_wrap'>
        <div className='product_header_wrap'>
            <h2>BETTER DISCOUNTS<br></br> BEST PRODUCTS</h2>
            <div className='product_body_wrap'>
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
              <div className='prduct_card'>
              <img src={Image3} alt='image1'/>
              <p>HEAVY GREY AH CLASSIC POLO</p>
              <p>$40.00 <strike>$65.00</strike>(save : $15.00)</p>
              </div>
          
           
        </div>
        </div>
        <div className='product_left_section'>
        <img src={Image4} alt='image1'/>
        </div>
     


    </div>
    </>
  )
}
