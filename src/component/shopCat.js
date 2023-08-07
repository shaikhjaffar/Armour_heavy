import React from 'react'
import SHop_PIc from '../assets/shop_cat.png'
export default function ShopCat() {
  return (
    <div className='shop_cat_main_wrap'>
         <div className='shop_cat_left_wrap'>
            <div className='header'>
             <h2>SHOP FROM CATEGORIES</h2>
             <div className='shop_cat_wrap_capsule'>
                <span className='active_capsule'>Shop Men</span>
                <span className='notactive_capsule'>Women</span>
                <span className='notactive_capsule' style={{zIndex:"1"}}>Shop Accessories</span>
             </div>
            </div>
            <div className='left_wrap_body'>
             <p>
             MAKE YOURSELF STAND OUT 
WITH OUT AMAZING MEN’S 
COLLECTION THIS SEASON.
             </p>
             <button className='btn_view_all'>View all</button>
            </div>

         </div>
         <div className='shop_cat_right_wrap'>
            <img src={SHop_PIc} alt=''/>
</div>

    </div>
  )
}
