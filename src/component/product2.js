import React from 'react'
import Image1 from '../assets/product2.png'
export default function Product2() {
  return (
    <div className='product2_main_wrap'>
    <div className='rectangle_green'>

    </div>
    <div className='prodcuct2_content'>
        <h2 style={{fontSize:"2.5rem",paddingBottom:"1em"}}>Brains behind<br></br> the Brand!</h2>
        <p style={{paddingBottom:"1em"}}>AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag us on Instagram to win exciting gift vouchers worth Rs 5,000!</p>
        <p style={{paddingBottom:"2em"}}>AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag us on Instagram to win exciting gift vouchers worth Rs 5,000!</p>
        <button className='viewall'>Know more</button>
    </div>
    <img src={Image1} alt=''/>
 
     </div>
  )
}
