import { BiCoffeeTogo } from "react-icons/bi";
import { ImHeadphones, ImBooks } from "react-icons/im";
import { TiCamera } from "react-icons/ti";
import { IoIosBicycle } from "react-icons/io";
import { Popup } from 'semantic-ui-react'

import "./about.css";
import { useEffect, useRef } from "react";
const AOS = require('aos');


const About = () => {

    const techRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });

        // Manually refresh AOS after mount to fix "appearing while scrolling" issue
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <div id="about-sec">
            <div>
                <p className="heading sec">About <strong>Me</strong></p>
            </div>

            {/* ── ABOUT ME CARD ── */}
            <div className="about-card-wrapper">
                <div data-aos="fade-up" data-aos-duration="1500" className="boxed card about-card">
                    <p>
                        <span className="about-intro">
                            Turning infrastructure chaos into production excellence,
                            one deployment at a time.
                        </span>
                        <br /><br />
                        I'm <strong>Krishnendu Bhowmick</strong>, a Senior DevOps Engineer II at Nomura Research Institute and <strong>AWS Community Builder</strong>, building cloud infrastructure that powers financial services for millions of users across India and global markets.
                        <br /><br />
                        With <strong>10+ years</strong> of experience, my core stack spans AWS, Kubernetes, Terraform, and CI/CD automation, delivering systems that are scalable, secure, and cost-efficient.
                        <br /><br />
                        I troubleshoot <strong>production incidents, optimize cloud costs, and document everything</strong> for the next engineer. My DevOps articles on Medium have reached 50,000+ readers globally.
                        <br /><br />
                        <strong>Currently exploring:</strong> AI/ML infrastructure on Kubernetes, FinOps, and multi-region architectures.
                        <br /><br />
                        Let's build infrastructure that doesn't just work. It scales, it's secure, and it sleeps so you can.
                        <br /><br />
                        <span className="scroll-callout">Scroll a little below to see the daily tech stack I work with.</span>
                        <br /><br />
                        📍 Kolkata, India &nbsp;|&nbsp; 🌐 Open to remote opportunities and consulting
                    </p>

                    <div className="hobbies">
                        <Popup
                            trigger={
                                <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className="material-icons">
                                    <BiCoffeeTogo color="#c7666c" fontSize="25px" />
                                </span>
                            }
                            content={<div>coffee enthusiast ☕</div>}
                            className="popped"
                            position='bottom center'
                        />
                        <Popup
                            trigger={
                                <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="material-icons">
                                    <ImHeadphones color="#c7666c" fontSize="25px" />
                                </span>
                            }
                            content='music across all genres 🎵'
                            className="popped"
                            position='bottom center'
                        />
                        <Popup
                            trigger={
                                <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                    <TiCamera color="#c7666c" fontSize="25px" />
                                </span>
                            }
                            content='photography and visual storytelling 📸'
                            className="popped"
                            position='bottom center'
                        />
                        <Popup
                            trigger={
                                <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                    <IoIosBicycle color="#c7666c" fontSize="25px" />
                                </span>
                            }
                            content='cycling through city streets 🚴'
                            className="popped"
                            position='bottom center'
                        />
                        <Popup
                            trigger={
                                <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                    <ImBooks color="#c7666c" fontSize="25px" />
                                </span>
                            }
                            content='reading tech and beyond 📚'
                            className="popped"
                            position='bottom center'
                        />
                    </div>
                </div>
            </div>

            {/* ── TECH ARSENAL CARD ── */}
            <div className="tech-card-wrapper" ref={techRef}>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="boxed card tech-card"
                >
                    <div className="details">
                        <h2 className="tech-heading">🛠️ Tech Arsenal</h2>
                        <p className="tech-desc">
                            Production-tested tools I use to build <strong>reliable</strong>, <strong>scalable</strong>, and <strong>secure</strong> infrastructure.
                        </p>

                        <div className="tech-grid-layout">

                            {/* CLOUD */}
                            <div className="tech-category-block">
                                <h3 className="category">☁️ Cloud Platforms</h3>
                                <div className="col-grid">
                                    <div className="popped">AWS</div>
                                    <div className="popped">OCI</div>
                                    <div className="popped">Azure</div>
                                     <div className="popped">GCP</div>
                                </div>
                            </div>

                            {/* AWS SERVICES */}
                            {/* <div className="tech-category-block">
                                <h3 className="category">🌩️ AWS Expertise</h3>
                                <div className="col-grid">
                                    <div className="popped">EC2 / EKS</div>
                                    <div className="popped">ECS</div>
                                    <div className="popped">S3 / EFS</div>
                                    <div className="popped">IAM / VPC</div>
                                    <div className="popped">Lambda / SageMaker</div>
                                    <div className="popped">Bedrock / Rekognition</div>
                                </div>
                            </div> */}

                            {/* Containers */}
                            <div className="tech-category-block">
                                <h3 className="category">☸️ Containers and Orchestration</h3>
                                <div className="col-grid">
                                    <div className="popped">Kubernetes</div>
                                    <div className="popped">Docker</div>
                                    <div className="popped">Podman</div>
                                    <div className="popped">Helm</div>
                                    <div className="popped">EKS</div>
                                </div>
                            </div>

                            {/* IAC */}
                            <div className="tech-category-block">
                                <h3 className="category">📦 Infrastructure as Code</h3>
                                <div className="col-grid">
                                    <div className="popped">Terraform</div>
                                    <div className="popped">Ansible</div>
                                    <div className="popped">AWS CDK</div>
                                </div>
                            </div>

                            {/* CI/CD */}
                            <div className="tech-category-block">
                                <h3 className="category">🚀 CI/CD and GitOps</h3>
                                <div className="col-grid">
                                    <div className="popped">Jenkins</div>
                                    <div className="popped">GitHub Actions</div>
                                    <div className="popped">GitLab CI/CD</div>
                                    <div className="popped">ArgoCD</div>
                                </div>
                            </div>

                            {/* Monitoring */}
                            <div className="tech-category-block">
                                <h3 className="category">📊 Monitoring and Observability</h3>
                                <div className="col-grid">
                                    <div className="popped">Prometheus</div>
                                    <div className="popped">Grafana</div>
                                    <div className="popped">ELK Stack</div>
                                    <div className="popped">CloudWatch</div>
                                    <div className="popped">Zabbix</div>
                                </div>
                            </div>

                            {/* Programming */}
                            <div className="tech-category-block">
                                <h3 className="category">💻 Programming and Scripting</h3>
                                <div className="col-grid">
                                    <div className="popped">Python</div>
                                    <div className="popped">Bash</div>
                                    <div className="popped">YAML</div>
                                    <div className="popped">JSON</div>
                                </div>
                            </div>

                            {/* OS & VCS */}
                            <div className="tech-category-block">
                                <h3 className="category">🐧 Operating Systems and VCS</h3>
                                <div className="col-grid">
                                    <div className="popped">Linux</div>
                                    <div className="popped">Git</div>
                                    <div className="popped">GitHub</div>
                                    <div className="popped">GitLab</div>
                                    <div className="popped">Bitbucket</div>
                                </div>
                            </div>

                            {/* Security */}
                            <div className="tech-category-block">
                                <h3 className="category">🔒 Security and Best Practices</h3>
                                <div className="col-grid">
                                    <div className="popped">IAM / WAF</div>
                                    <div className="popped">Secrets Management</div>
                                    <div className="popped">Security Scanning</div>
                                </div>
                            </div>

                            {/* Databases */}
                            <div className="tech-category-block">
                                <h3 className="category">🗄️ Databases and Storage</h3>
                                <div className="col-grid">
                                    <div className="popped">PostgreSQL</div>
                                    <div className="popped">MySQL</div>
                                    <div className="popped">Redis</div>
                                    <div className="popped">Dynamo DB</div>
                                </div>
                            </div>

                            {/* Additional Tools */}
                            <div className="tech-category-block">
                                <h3 className="category">🎯 Additional Tools</h3>
                                <div className="col-grid">
                                    <div className="popped">Nexus</div>
                                    <div className="popped">Kafka</div>
                                    <div className="popped">Nginx</div>
                                    <div className="popped">Sonarqube</div>
                                    <div className="popped">Trivy</div>
                                </div>
                            </div>

                            {/* ── AIOps / MLOps (NEW) ── */}
                            <div className="tech-category-block aiops-block">
                                <h3 className="category aiops-category">🤖 AIOps and MLOps <span className="learning-badge">Learning Path</span></h3>
                                <p className="aiops-note">
                                    As a DevOps engineer stepping into the AI era, these are the tools and concepts I'm actively exploring to bridge infrastructure and intelligent systems.
                                </p>
                                <div className="col-grid">
                                    <div className="popped aiops-tag">RAG Systems</div>
                                    <div className="popped aiops-tag">LLM Serving (vLLM / Ollama)</div>
                                    <div className="popped aiops-tag">MLflow</div>
                                    <div className="popped aiops-tag">Kubeflow</div>
                                    <div className="popped aiops-tag">Seldon Core</div>
                                    <div className="popped aiops-tag">Vector Databases (Weaviate / Pinecone)</div>
                                    <div className="popped aiops-tag">Model Registries</div>
                                    <div className="popped aiops-tag">GPU Node Provisioning on K8s</div>
                                    <div className="popped aiops-tag">AI Observability (Langfuse)</div>
                                    <div className="popped aiops-tag">Feature Stores</div>
                                    <div className="popped aiops-tag">Data Pipelines (Airflow)</div>
                                    <div className="popped aiops-tag">LangChain / LlamaIndex</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
