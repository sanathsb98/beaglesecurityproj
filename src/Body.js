import React from 'react'
import './Body.css'
import Button from 'react-bootstrap/Button';
import CommitIcon from '@mui/icons-material/Commit';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import { SignalCellularConnectedNoInternet0Bar } from '@mui/icons-material';
import PieChartIcon from '@mui/icons-material/PieChart';
import Form from 'react-bootstrap/Form';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from './Footer';
function Body() {
  return (
    <div className='body'>
        <div className='home_firstcontent'>
            <div className='home_fc1'>
            <h1>Commited to <br/> <span style={{color:"blue"}}>people</span> and the <br/> future
            <h6>We are <span style={{color:"blue"}}>Monst</span>, a creative design social marketing</h6>
            <Button className='btn-sm' variant="primary">Key Features</Button>
            <Button className='btn-sm' variant="light">How We Work ?</Button>
            </h1>
           
            </div>
            <div className='home_fc2'>
            <img src='images/image1.svg' style={{width:"250px"}} alt='home_img1'/>
            </div>
        </div>

        <div className='home_secondcontent'>
            <div className='home_sc1'>
            <h1>Saas solutions<br/><span style={{color:"blue"}}> for your Business </span> Grow <br/> on time</h1>
            </div>
            <div className='home_sc2'>
                <h6 style={{color:"gray"}} >Business Solutions is such a broad description. It really depends on what services the business is offering.In my books, a business solutions company is a business that offers services to other businesses. Such as webhost, domain, and cloud in services. Graphics & logo design, stationary. Social media setup and email setup.
                    
                </h6>
            </div>
        </div>

        <div className='home_thirdcontent'>
            <div className='home_tc1'>
                    <CommitIcon style={{color:"blue"}}  />
                    <span>IT Consultancy</span>
                    
            </div>
            <div className='home_tc2'>
                    <BusinessCenterIcon style={{color:"blue"}}/>
                    <span>Web Development</span>
            </div>
            <div className='home_tc3'>
                    <SignalCellularConnectedNoInternet0Bar style={{color:"blue"}}/>
                    <span>App Development</span>
            </div>
            <div className='home_tc4'>
                    <PieChartIcon style={{color:"blue"}}/>
                    <span>Digital Marketing</span>
            </div>
        </div>

        <div className='home_fourthcontent'>
            <div className='home_fo1'>
                  <h1>Greater Things In <br/> Business Are <span style={{color:"blue"}}>Never <br/> Done</span> By One Person <br/>
                  <Button className='btn-sm' variant="primary">Learn More</Button>
                  </h1>
                 
            </div>
            <div className='home_fo2'>
                 <ul className='unorderedliststyle'>
                    <li> <h3>Project Initialization</h3></li>
                    <h6 style={{color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h6>

                    <li> <h3>Looking For Creative</h3></li>
                    <h6 style={{color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h6>

                    <li> <h3>Market Development</h3></li>
                    <h6 style={{color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h6>
                 </ul>
            </div>
        </div>

        <div className='home_fifthcontent'>
            <div className='home_fi1'>
                  <h1>Simple Solution <br/> for <span  style={{color:"blue"}}>Complex</span> <br/> Connections</h1>
            </div>
            <div className='home_fi2'>
            <img src='images/image2.jpg' style={{width:"430px"}} alt='home_img1'/>
            </div>
        </div>

        <div className='homesigninform'>
            <div className='form1'>
                <span><h3>Choose Your</h3></span>
                <span><h3><span style={{color:"blue"}}>Best</span> Pricing Plan</h3></span>
                <span>Great Things In Business Are Never Done </span>
                <span>By One Person</span>
                <div className='formoption'>
                    <span className='option1'><input type={"radio"}/> Monthly Billing <Button className='btn-sm'   variant="primary">$59</Button></span>
                    <span className='option2'><input type={"radio"}/> Annual Billing <Button className='btn-sm'   variant="primary">$59</Button></span>
                </div>
            </div>
            <div className='form2'>
             <div className='form2_left'>
                      <span>Sign in</span><br/>
                      <span>Setup your payment</span>
                      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="name@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="password" placeholder="Enter you password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to terms and conditions" />
      </Form.Group>
      <Button style={{width:"300px"}} variant="primary" type="submit">
       Purchase now
      </Button>
    </Form>
             </div>
             <div className='form2_right'>
                     <span className='form2content'>Various Analysis Options</span>
                     <span className='form2content'><h2>Techno</h2></span>
                     <span className='form2content'><h2>Provides</h2></span>
                     <span className='form2content'><h2>Realtime best</h2></span>
                     <span className='form2content'><h2>Data Solutions</h2></span>
             </div>
            </div>
        </div>


        <div className='homesigninform'>
            <div className='form1'>
                <span><h3>Get in touch !</h3></span>
                <span>We will be glad to hear from you</span>
                <div className='formoptionmsg'>
                    <div className='formoptionmsg1'>
                     <span><LocalPhoneIcon style={{color:"blue"}} /></span><br/>
                     <div  className='formoptionmsgcont' >
                      <span>Phone</span><br/>
                      <span>+ 65-45-34-876</span><br/>
                      <spam>+ 67-32-67-987</spam>
                     </div>
                    </div>
                    <div className='formoptionmsg1'>
                      <span><EmailIcon style={{color:"blue"}} /> </span><br/>
                      <div  className='formoptionmsgcont' >
                      <span>E-mail</span><br/>
                      <span>contact@monst.com</span><br/>
                      <spam>pat@example.com</spam>
                     </div>
                      
                    </div>
                    <div className='formoptionmsg1'>
                      <span><LocationOnIcon style={{color:"blue"}}/></span><br/>
                      <div  className='formoptionmsgcont' >
                      <span>Location</span><br/>
                      <span>11567 E Broadview DR</span><br/>
                      <spam>Colorado &#40;CO&#41;, 80117 </spam>
                     </div>
                    </div>
                </div>
            </div>
            <div className='msgform2'>
             <div className='msgform2_left'>
                      <div className='enquirycontent'>
                        <span className='ec1'><b>Department:</b></span>
                        <span className='ec1'><input type={"radio"}/> Support</span>
                        <span className='ec1'><input type={"radio"}/> Sales</span>
                      </div>
                      
                      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="subject" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="name@example.com" />
        
      </Form.Group>

      
      <div className='browsebtn'>
        
      <Button style={{width:"100px"}} variant="secondary" type="submit">
       Browse
      </Button>
      </div>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to terms and conditions" />
      </Form.Group>
    </Form>
             </div>
             <div className='msgform_right'>
                  <Form>
                  <textarea class="form-control" placeholder="Message..."  id="exampleFormControlTextarea1" rows="11" cols={"50"}></textarea>
                  <div className='browsebtn'>
        
        <Button style={{width:"100px"}} variant="primary" type="submit">
         Submit
        </Button>
        </div>
                  </Form>
                   
             </div>
            </div>
        </div>

        
       <Footer/>

    </div>
  )
}

export default Body