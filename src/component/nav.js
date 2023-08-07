import React from 'react'
import Hamburger from './hamburgerMenu'

export default function Nav() {
  return (
     <div className='navbar_wrap'>
      
       <ul className='navbar_conatiner'>
       <li>SHOP</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>ARMOUR ADVANTAGE</li>
       </ul>
       <Hamburger/>
       <div className='logo_container'>
       <span>ARMOUR HEAVY</span>
       </div>
       <div className='cart_serach_conatiner'>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<g opacity="0.6">
<circle cx="13.75" cy="13.75" r="8.75" stroke="#323232" stroke-width="2"/>
<path d="M13.75 10C13.2575 10 12.7699 10.097 12.3149 10.2855C11.86 10.4739 11.4466 10.7501 11.0983 11.0983C10.7501 11.4466 10.4739 11.86 10.2855 12.3149C10.097 12.7699 10 13.2575 10 13.75" stroke="#323232" stroke-width="2" stroke-linecap="round"/>
<path d="M25 25L21.25 21.25" stroke="#323232" stroke-width="2" stroke-linecap="round"/>
</g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
<g opacity="0.5">
<path d="M3.78227 6.0229C11.0327 4.30493 20.0467 4.41026 22.1299 6.64923C24.2132 8.88819 24.1702 16.3747 21.735 18.429C19.3012 20.4832 8.73157 20.6785 5.38304 18.429C1.8453 16.051 3.89798 8.73588 3.78227 4.30493C3.8517 1.82545 1 1.42334 1 1.42334" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3008 11.5334H19.0754" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.91956 23.6195C6.32791 23.6195 6.66003 23.9326 6.66003 24.3177C6.66003 24.7039 6.32791 25.0171 5.91956 25.0171C5.50986 25.0171 5.17773 24.7039 5.17773 24.3177C5.17773 23.9326 5.50986 23.6195 5.91956 23.6195Z" fill="black" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9827 23.6195C20.3925 23.6195 20.7246 23.9326 20.7246 24.3177C20.7246 24.7039 20.3925 25.0171 19.9827 25.0171C19.5743 25.0171 19.2422 24.7039 19.2422 24.3177C19.2422 23.9326 19.5743 23.6195 19.9827 23.6195Z" fill="black" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
  <g opacity="0.5">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45022 11.028C0.151129 7.20003 1.66936 2.82471 5.92743 1.53005C8.16725 0.847875 10.6395 1.2501 12.5016 2.57218C14.2632 1.28666 16.8262 0.852446 19.0636 1.53005C23.3217 2.82471 24.8496 7.20003 23.5517 11.028C21.5299 17.0956 12.5016 21.7692 12.5016 21.7692C12.5016 21.7692 3.53991 17.1665 1.45022 11.028Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M17.3438 5.43079C18.6392 5.826 19.5545 6.91684 19.6647 8.1973" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
       </div>
     </div>
  )
}
