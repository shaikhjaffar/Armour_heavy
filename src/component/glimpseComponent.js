import React from 'react'
import Image1 from '../assets/glimpse01.png'
import Image2 from '../assets/glimpse02.png'
import Image3 from '../assets/glimpse03.png'
import Image4 from '../assets/glimpse04.png'
import Image5 from '../assets/showcasebg.png'
import Image6 from '../assets/cardbg2.png'
export default function GlimpseComponent() {
  return (
    <>
           <div className='showcase_product_main_wrap mobileonly_wrap'>
     <div className='showcase_left_wrap'>
        <img src={Image5} alt='image1' style={{width:"100%",height:"100%"}}/>
     </div>
     <div className='showcase_right_wrap'>
     <h2>To WIN be in AH always!</h2>
       <p>AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag us on Instagram to win exciting gift vouchers worth Rs 5,000!</p>
       <button className='viewall'>Know More</button>
     </div>
    </div>
    <div className='showcase_product_main_wrap mobileonly_wrap1'>
    
     <div className='showcase_right_wrap'>
     <h2>To WIN be in AH always!</h2>
       <p>AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag us on Instagram to win exciting gift vouchers worth Rs 5,000!</p>
       <button className='viewall'>Know More</button>
     </div>
     <div className='showcase_left_wrap'>
     <img src={Image6} alt='image1' style={{width:"100%",height:"100%"}}/>
       </div>
    </div>
   
    <div className='product_main_wrap'>
        <div className='product_header_wrap'>
            <h2>Our Social Media Glimpse!</h2>
            <button className='btn_view_all desktop_only'>View all</button>
        </div>
        <div className='product_body_wrap'>
            <img src={Image1} alt='image1'/>
            <img src={Image2} alt='image1'/>
            <img src={Image3} alt='image1'/>
            <img src={Image4} alt='image1'/>
        </div>
        <button className='viewall onlymobile'>View All</button>


    </div>
    </>
  )
}
