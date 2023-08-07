import React from 'react'
import IMage1 from '../assets/glimpse1.png'
export default function Glimpse() {
  return (
    <div className='glimpse_main_wrap'>
   <h2>GLIMPSE OF OUR SOCIALS</h2>
   <div className='glipmse_card_wrap'>
   <div className='rectangle_border_white'>

</div>
    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>
    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>

    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>
    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>
    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>
    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>

    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>
    <div className='glipmse_card'>
      <img src={IMage1} alt='image'/>
    </div>

   </div>
     <button className='viewall'>Follow Us</button>
    </div>
  )
}
