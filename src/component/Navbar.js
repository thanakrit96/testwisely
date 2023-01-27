import React from 'react'
import { SiTailwindcss } from "react-icons/si";
/* import { FaTimes,FaBars } from "react-icons/fa";
import { UseState } from 'react'; */
import { RiArrowDropDownLine } from "react-icons/ri";
import './Navbar.css'
import { HiCursorClick,HiChartBar,HiOutlineShieldCheck,HiOutlineViewGrid,HiPlay,HiPhone } from "react-icons/hi";
import { AiOutlineReload } from "react-icons/ai";

function navbar() {
    

    return ( 
        <header className='navcon'>
        <div className = "nav-area" >
            <div className = "logo"><SiTailwindcss/></div> 
            <ul className='hnav'>
            <li className='dropsh'><a href='#'>Solution<RiArrowDropDownLine/></a>
                <div className='dropdown'>
                    <li><a href='#'><HiChartBar/>Analytics</a><p>Get a better understanding of where your traffic is coming from.</p></li>
                    <li><a href='#'><HiCursorClick/>Engagement</a><p>Speak directiy to your customers in a more meaningful way.</p></li>
                    <li><a href='#'><HiOutlineShieldCheck/>Security</a><p>Your customers' data will be safe and secure.</p></li>
                    <li><a href='#'><HiOutlineViewGrid/>Integrations</a><p>Connect with third-party tools that you're already using.</p></li>
                    <li><a href='#'><AiOutlineReload></AiOutlineReload>Automations</a><p>Build strategic funnels that will drive your customers to convert.</p></li>
                    <div className='watchcon'>
                        <li><a href='#'><HiPlay/>Watch demo</a></li>
                        <li><a href='#'><HiPhone/>Contact Sales</a></li>
                    </div>
                </div>
                </li>
                <li><a href='#'>Pricing</a></li>            
                <li><a href='#'>Docs</a></li>
                <li><a href='#'>More<RiArrowDropDownLine/></a></li>
            </ul>
            <div className='bsing'>
            <button className='buttons'>Sign in</button>
            <button className='buttons'>Sign Out</button>
            </div>
        </div> 
        </header >
    );
}
export default navbar 