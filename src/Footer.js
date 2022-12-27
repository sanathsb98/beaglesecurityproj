import React from 'react'
import './Footer.css'
import LayersIcon from '@mui/icons-material/Layers';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className='Footer'>
        <div className='footerfirst'>
                <div className='footerfirst_1'>
                <LayersIcon style={{color:"blue"}}/>Monst
                </div>
                <div className='footerfirst_2'>
                <span>Helping you <b>mazimize</b> operations<br/>management with digitalization</span>
                
                <span></span>
                </div>
                <div className='footerfirst_3'>
                <span><b>Office</b><br/>
                359 Hidden Valley <br/>
                Road NY
                </span><br/>
                
                </div>
                <div className='footerfirst_4'>
                <span><b>Contacts</b><br/>
                &#40;+01 234 568&#41;<br/>
                contact@monst.com
                </span>
                </div>
        </div>
        <div className='footersecond'>
                     <div className='footersecond_1'>
                      <CopyrightIcon style={{height: "0.73em"}}/>
                      All rights reserved.
                      Designed by <span style={{color:"blue"}}>Alethemes.com</span>
                     </div>
                     <div className='footersecond_2'>
                        <span ><FacebookIcon style={{height: "0.73em",color:"blue"}}/></span>
                        <span><TwitterIcon style={{height: "0.73em",color:"blue"}}/></span>
                        <span><InstagramIcon style={{height: "0.73em",color:"blue"}}/></span>
                     </div>
        </div>
    </div>
  )
}

export default Footer