import React from 'react'
import './style.css'
export default function Hamburger() {
  return (
      
    <>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="hamburger" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="menu-items">
            <li>SHOP</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>ARMOUR ADVANTAGE</li>
          </div>
        </div>
      </div>
    </>
  )
}
