import { logo } from "../../assets"
import { socials } from "../../constants"

import './Footer.css'
const Footer = () => {    
  return (
    <footer className='app__footer'>
        <div className='footer--links'>
            <div className='links--outro'>
                <img src={logo} alt= "HooBank Logo"/>
                <p className="footer--slogan">Next-generation payments that power the world.</p>
            </div>
            
            <div className="footer--content"> 
                <ul className="footer--list">
                    <p className="footer--subtitle">Useful Links</p>
                    <li > <a href="404"> Content</a> </li>
                    <li > <a href="404"> How it works</a> </li>
                    <li > <a href="404"> Create</a> </li>
                    <li > <a href="404"> Explore</a> </li>
                    <li > <a href="404"> Terms & Services</a> </li>            
                </ul>            
                
                <ul className="footer--list">
                    <p className="footer--subtitle">Community</p>
                    <li > <a href="404"> Help Center</a> </li>
                    <li > <a href="404"> Partners</a> </li>
                    <li > <a href="404"> Suggestions</a> </li>
                    <li > <a href="404"> Blog</a> </li>
                    <li > <a href="404"> Newsletters</a> </li>            
                </ul>    
                
                <ul className="footer--list">
                    <p className="footer--subtitle">Partner</p>
                    <li > <a href="404"> Partner Portal</a> </li>                
                </ul>    
            </div>
            

        </div>
        <hr className="footer--divider"/>         
        <div className='footer--contact'>
            <p> Copyright © 2021 HooBank. All Rights Reserved.</p>
            <div className="footer--socials">
                {socials.map((item)=>(
                    // Would use a Link and a source field in the json object from constants to enable clickable images
                    <img src={item.source} alt ={item.name}/>
                ))}
            </div>
            
        </div>

    </footer>
  )
}

export default Footer