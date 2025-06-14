import { BiCoffeeTogo } from "react-icons/bi";
// import { HiCode } from "react-icons/hi";
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

                        Meet a tech mind shaped by both <strong>discipline and wonder</strong> — one that evolved from an <i>Infrastructure Specialist</i> into a dynamic <strong>DevOps Engineer</strong>, sculpting the future of software delivery.
                        <br /><br />
                        With over <strong>9 years of experience</strong>, I began by orchestrating Oracle applications and server landscapes. Today, I design scalable, reliable, and secure cloud-native infrastructure using <strong>Kubernetes, Docker, and AWS.</strong>
                        <br /><br />
                        In the cloud realm, I architect solutions and automate lifecycles using the precision of <strong>Terraform</strong>, and integrate code workflows through <strong>Git, Jenkins, GitLab,</strong> and <strong>GitHub Actions</strong>. I’m equally comfortable building CI/CD pipelines as I am debugging complex infrastructure issues.
                        <br /><br />
                        I’m also a performance guardian — leveraging <strong>Prometheus, Grafana, Zabbix, ELK,</strong> and <strong>Nexus</strong> to monitor, visualize, and optimize. Every challenge I face is met with curiosity and a constant drive to improve.
                        <br /><br />
                        My work is not just code — it's craft. Every deployment is a composition. Every automated pipeline, a rhythm.
                        <br /><br />
                        Let’s create systems that not only work, but inspire.
                        <br />
                        Let’s build — with purpose, passion, and precision.<br />
                        <br />
                        
                    </p>
                    <div className="hobbies">
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className="material-icons">
                                <BiCoffeeTogo color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={<div>coffee</div>}
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
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                </div>
            </div>
            
            <div className="col">
                <div className="skills-text">
                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000"
                    className="boxed card"
                    >
                    <div className="details">
                        <h2 className="tech-heading">🛠️ Tech Stack</h2>
                        <p className="tech-desc">
                            My toolbox for delivering <strong>reliable</strong>, <strong>scalable</strong> systems.
                            </p>


                        <div className="col1">
                        {/* CLOUD */}
                        <h3 className="category">☁️ Cloud Platforms</h3>
                        <div className="col-grid">
                            <div className="popped">AWS</div>
                            <div className="popped">OCI</div>
                        </div>

                        {/* IAC */}
                        <h3 className="category">📦 Infrastructure as Code</h3>
                        <div className="col-grid">
                            <div className="popped">Terraform</div>
                            <div className="popped">Ansible</div>
                        </div>

                        {/* CI/CD */}
                        <h3 className="category">🚀 CI/CD & Automation</h3>
                        <div className="col-grid">
                            <div className="popped">Jenkins</div>
                            <div className="popped">GitLab CI/CD</div>
                            <div className="popped">GitHub Actions</div>
                        </div>

                        {/* Containers */}
                        <h3 className="category">☸️ Containers & Orchestration</h3>
                        <div className="col-grid">
                            <div className="popped">Docker</div>
                            <div className="popped">Kubernetes</div>
                        </div>

                        {/* Monitoring */}
                        <h3 className="category">📊 Monitoring & Logging</h3>
                        <div className="col-grid">
                            <div className="popped">Prometheus</div>
                            <div className="popped">Grafana</div>
                            <div className="popped">Zabbix</div>
                            <div className="popped">ELK Stack</div>
                        </div>

                        {/* Programming & System */}
                        <h3 className="category">💻 Programming & System</h3>
                        <div className="col-grid">
                            <div className="popped">Python</div>
                            <div className="popped">Shell Scripting</div>
                            <div className="popped">Linux</div>
                            <div className="popped">Git</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        
        </div>
        </div>
    )
}

export default About