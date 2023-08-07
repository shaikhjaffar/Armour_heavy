import React from 'react'
import Image1 from '../assets/better_1.png'
import Image2 from '../assets/better_2.png'
import Image3 from '../assets/better_3.png'
import Image4 from '../assets/AH_Cloth_gif0001-0363.gif'
import Post1 from '../assets/instapost1.png'
import Post2 from '../assets/instapost2.png'
import Post3 from '../assets/instapost3.png'
import Post4 from '../assets/instapost4.png'
import team from '../assets/productimg-removebg-preview.png'
import team1 from '../assets/team.png'
import Phoneview from './phoneview'
export default function Better() {
  return (
      <>
        <div className='shop_cat_product_wrap'>
          {/* <img src={} alt='Gif'/> */}
      <h2>SHOP FROM CATEGORIES</h2>
      <p>Make yourself stand out with out amazing New collection this season.</p>
      <div className='shop_btn_wrap'>
        <button className='viewall'>Mens</button>
        <button className='viewall'>Womens</button>
        <button className='viewall'>New Collection</button>
      </div>
    </div>
     {
      window.innerWidth > 600 ?    <div className='better_Product_wrap'>
      <img className='prductbig' src={team} alt='image'/>
      <div className='better_product1_wrap'>
      <div className='heading_wrap'>
      <h2 style={{fontSize:"2rem"}}>BETTER DISCOUNTS <br></br> BEST PRODUCTS</h2>
       <button className='viewall' style={{background:"#fff",color:"#000",marginLeft:"78%"}}>View all</button>
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
                <div className='prduct_card'>
                <img src={Image3} alt='image1'/>
                <p>HEAVY GREY AH CLASSIC POLO</p>
                <p>$40.00<strike>$65.00</strike>(save : $15.00)</p>
                </div>
      </div>
    
      </div>
      <div className='discountwrap'>
        <div className='discount_content'>
          <span className='upto'>Up Too</span>
          <span className='fifty'>50</span>
          <span className='percent'>%</span>
          <span className='off'>Off</span>
          <span className='slecttyle'><i>Select your Style</i></span>
          <button className='viewall'>Shop Now</button>
  
        </div>
        
      </div>
      
      <div className='gof_gif_wrap'>
      <img src={Image4} alt=''/>
  
    </div>
    <div className='golf_content_wrap'>
     <h2>
     Armour Heavy <br></br> X <br></br>Golf Collection
     </h2>
     <p>AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag </p>
     <button className='viewall'>Shop Now</button>
    </div>
  
  
  
  </div> :<><h2 style={{fontSize:"1rem",paddingLeft:"2em"}}>BETTER DISCOUNTS  BEST<br></br> PRODUCTS</h2><Phoneview/></> 
     }
 
  

<div className='insta_post_main_wrap'>
<div className='golf_content_wrap'>
   <h2>
   To WIN be in AH<br></br> always!
   </h2>
   <p>AH STYLEQs offers you a quick overview on best combinations you can dress-up in. Buy your AH performance wear selecting the best combinations and tag </p>
   <button className='viewall'>Shop Now</button>
  </div>
  <div className='insta_card_wrap'>
  <div className="marquee-wrapper">
		<div className="marquee-block">
			<div className="marquee-inner to-left">
				<span>
					<div className="marquee-item">
						<img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post2} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post3} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post4} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
				</span>
				<span>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post2} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post3} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post4} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
				</span>
			</div>
		</div>
		<div className="marquee-block">
			<div className="marquee-inner to-right">
      <span>
					<div className="marquee-item">
						<img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post2} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post3} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post4} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
				</span>
				<span>
					<div className="marquee-item">
						<p className="text-white">5</p>
					</div>
					<div className="marquee-item">
						<p className="text-white">4</p>
					</div>
					<div className="marquee-item">
						<p className="text-white">3</p>
					</div>
					<div className="marquee-item">
						<p className="text-white">2</p>
					</div>
					<div className="marquee-item">
						<p className="text-white">1</p>
					</div>
				</span>
			</div>
		</div>
    <div className="marquee-block desktop_only">
			<div className="marquee-inner to-left">
				<span>
					<div className="marquee-item">
						<img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
				</span>
				<span>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
					<div className="marquee-item">
          <img src={Post1} alt=''/>
					</div>
				</span>
			</div>
		</div>
</div>
  </div>
</div>
 <div className='team_main_wrap'>
  <img className='teamimage' src={team1} alt='team'/>
   <h2>What “Make in India <br></br>Means to us”</h2>
   <button className='viewall' style={{zIndex:"2"}}>Know more</button>
 </div> 

</>
  )
}
