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
            <div className="col1">
                <div data-aos="fade-left" data-aos-duration="1500" className="boxed card">
                    <p>
                        <span className="about-intro">
                            A keen learner,<br /> 
                            a universe of atoms, <br />
                            atoms of curiosity.
                        </span>
                        <br />

                        Meet the tech virtuoso who seamlessly transitioned from Executive – Application Support to a dynamic DevOps Engineer, shaping the future of software delivery.
                        <br /><br />
                        With over 8 years of expertise, I once orchestrated the support dance for Oracle applications and server management. Now, I'm the maestro of Kubernetes, Docker, and AWS, crafting efficient and reliable cloud solutions.
                        <br /><br />
                        In the AWS realm, I architect and optimize, using Terraform's alchemy to automate infrastructure. As a DevOps virtuoso, I orchestrate harmonious code integration through Git, Jenkins, and more.
                        <br /><br />
                        Beyond the orchestration, I'm a vigilant guardian of performance, utilizing Nexus for artifact storage and proactive identification of bottlenecks. In the vast landscape of technologies, I bring not just aptitude but a relentless curiosity for solving operational challenges.
                        <br /><br />
                        Embark on a journey where every line of code is a stroke of art, and every deployment is a masterpiece in the making. Join me in the symphony of technology, where efficiency meets elegance.

                        <br /><br />
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