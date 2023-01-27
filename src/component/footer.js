import React from 'react'
import './footer.css'
import { SiTailwindcss,SiFacebook,SiInstagram,SiTwitter,SiGithub,SiYoutube } from "react-icons/si";

function footer() {
  return (
   
    <div className='footcon'>
      <div className='atside'>
        <div className='taillogo'><SiTailwindcss/></div>
        <div className='mik'>Making the world a better place through constructing elegant hierarchies</div>
        <div className='locon'>
          <div><SiFacebook/></div>
          <div><SiInstagram/></div>
          <div><SiTwitter/></div>
          <div><SiGithub/></div>
          <div><SiYoutube/></div>
          </div>
      </div>
        <ul>
        <li>
          <h4>Solution</h4>
          <p>Marketing</p>
          <p>Analytics</p>
          <p>Commerce</p>
          <p>Insights</p>
        </li></ul>
         <ul>
          <li>
          <h4>Support</h4>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Guides</p>
          <p>API Status</p>
        </li>
        </ul>
        <ul>
          <li>
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Partners</p>
        </li>
        </ul>
        <ul>
        <li>
          <h4>Legal</h4>
          <p>Claim</p>
          <p>Privacy</p>
          <p>Terms</p>
        </li>
        </ul> 
        
        <div className='lfoot'>
          @ 2020 Your Company,lnc.All right reserved
          </div>    
    </div> 
  )
}

export default footer