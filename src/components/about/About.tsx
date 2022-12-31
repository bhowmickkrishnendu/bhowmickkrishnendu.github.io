import { BiCoffeeTogo } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { ImHeadphones, ImBooks } from "react-icons/im";
import { TiCamera } from "react-icons/ti";
import { IoIosBicycle } from "react-icons/io";
import { Popup } from 'semantic-ui-react'

import "./about.css";
import { useEffect } from "react";
const AOS = require('aos');


const About = () => {

    useEffect(() => {
        AOS.init({
          duration : 1200
        });
      }, []);

    return (
        <div id="about-sec">
        <div>
            <p className="heading sec">About <strong>Me</strong></p>
        </div>
        <div className="col-grid">
            <div className="col">
                <div data-aos="fade-left" data-aos-duration="1500" className="boxed card">
                    <p>
                        <span className="about-intro">
                            A keen learner,<br /> 
                            a universe of atoms, <br />
                            atoms of curiosity.
                        </span>
                        <br />

                        I have an inclination towards Devops, site reliability and application support engineering, 
                        my strength is my ability to adapt & learn quickly as 
                        software version changes are significantly different. <br />
                        <br />
                        
                        Described as a “Executive – Application Support” with special focus in server and desktops, 
                        Oracle application support, Ubuntu and Office 365. Over 7 years of experience performing various 
                        role from application support to the server include management, documentation, maintenance of IT resource, 
                        system analysis, installation, migration, configuration, troubleshooting, helpdesk ticketing etc.
                        <br />
                        <br />
                        I also enjoy collaborating and look forward to fun and productive social engagements on the way.
                        <br />
                        <br />
                        <br />
                        
                    </p>
                </div>
            </div>
            
            <div className="col">
                <div data-aos="zoom-in-right" data-aos-duration="1100" className="boxed details card">
                    <p className="bio">Quick Adaptability</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1300" className="boxed details card">
                    <p className="bio">Strategic Planning</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1500" className="boxed details card">
                    <p className="bio">Manage Time Efficiency</p>
                </div>
            
                <div className="hobbies">
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className="material-icons">
                                <BiCoffeeTogo color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={<div>coffee<br />coffee<br />coffee</div>}
                        className="popped"
                        position='bottom center'
                    />

                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="material-icons">
                                <ImHeadphones color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='all genre tunes'
                        className="popped"
                        position='bottom center'
                    />
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <TiCamera color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='capture life through my shots'
                        className="popped"
                        position='bottom center'
                    />
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <IoIosBicycle color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='cycling through streets'
                        className="popped"
                        position='bottom center'
                    />

                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <ImBooks color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={"reading "}
                        className="popped"
                        position='bottom center'
                    />
                    

                    

                    
                    
                </div>
            </div>

        </div>
        </div>
    )
}

export default About