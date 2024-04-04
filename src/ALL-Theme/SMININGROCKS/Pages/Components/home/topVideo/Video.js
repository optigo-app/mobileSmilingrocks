import React from 'react'
import './Video.css'
import demovide from '../../../assets/Video/demo2.mp4'

export default function Video() {
  return (
    <div>

      {/* <video width="500" autoPlay controls loop style={{ height: 'auto', width: '100%' }}> */}
      <video width="500" autoPlay loop style={{ height: 'auto', width: '100%' }}>
        <source src={demovide} type="video/mp4" />
      </video>
      {/* <video src="https://player.vimeo.com/progressive_redirect/playback/648405863/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=caa083b1c8ffc0d906e9525db5c0b51445b4a915857f462c786d974f5278c22f" loop autoPlay='autoplay' style={{ height: 'auto', width: '100%' }}></video> */}
    </div>
  )
}
