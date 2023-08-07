import React from 'react'
import Gif from '../assets/ezgif.com-video-to-gif (2).gif'
export default function Videolanding() {
  return (
    <div className='video_wrapper'>
                    <img src={Gif} alt='Gif' />
                    <h1 className='heading onlymobile' style={{top:"10%"}}>BOTANICAL GARDEN</h1>
                    <h1 className='heading desktop_only' style={{top:"20%",left:"25%"}}>BOTANICAL</h1>
                    <h1 className='heading desktop_only'style={{top:"50%",left:"63%"}}>GARDEN</h1>
            <button>Know more</button>
    </div>
  )
}
