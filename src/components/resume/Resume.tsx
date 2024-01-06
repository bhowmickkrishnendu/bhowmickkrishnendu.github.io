import {useState} from 'react';
import Card from "../Card";
import CardExp from "../CardExp";

import './resume.css';


const Resume = () => {


  const [experience, setExperience] = useState([
      {
      dates: "August 2023 – Current",
      title: "AWS DevOps Engineer",
      subtitle: "HashCash Consultants - Kolkata",
      description: '☑ Architected and maintained AWS cloud components (EC2, S3, VPCs, IAM).\n\n☑ Optimized resource allocation, cost efficiency, and security.\n\n☑ Automated infrastructure with Terraform, managed services like EKS, ECS, SNS, Route 53, Autoscaling and CloudWatch.\n\n☑ Automate infrastructure provisioning and configuration using (IaC) tools Terraform.\n\n☑ Designed, deployed, and managed Kubernetes clusters for containerized apps.\n\n☑ Implemented best practices for containerization, resource utilization, and security.\n\n☑ Troubleshot and resolved Kubernetes and Docker-related issues.\n\n☑ Developed CI/CD pipelines using Git, Jenkins, and relevant tools.\n\n☑ Automated application builds, testing, and deployment processes.\n\n☑ Collaborated with development teams for code integration, version control, and release management.\n\n☑ Configured Nexus for artifact and dependency storage.\n\n☑ Set up prometheus, grafana monitoring dashboards, alerts, and reports.\n\n☑ Proactively identified and resolved performance bottlenecks, conducted root cause analysis.\n\n☑ Designed solutions for DevOps, Cloud, Virtualization, and Storage technologies.'
      },
      {
        dates: "August 2016 – August 2023",
        title: "Executive – Information Technology (Application and Infra Support)",
        subtitle: "Landmark Group - Kolkata, Chennai & Bangalore",
        description: "☑ Deployed and supported Apache Tomcat, Oracle Retail POS, Oracle BI, and Middleware applications.\n\n☑ Managed network, cloud, and bare-metal servers for efficient business operation.\n\n☑ Monitored and reported infrastructure and application issues, troubleshooting outages and improving performance.\n\n☑ Upgraded systems with new releases, developed expertise to train staff on emerging technologies.\n\n☑ Set up new build environments for applications in Windows/Linux, troubleshooted deployment issues.\n\n☑ Architected, provisioned, and maintained cloud infrastructure components for disaster recovery and high availability.\n\n☑ Collaborated with end-users for project/task delivery, maintaining process documentation.\n\n☑ Worked with scripting language like Shell Scripting, and Batch.\n\n☑ Experience on Ticketing Tools."
      },
      {
        dates: "February 2015 – April 2016",
        title: "System Administrator",
        subtitle: "Webbings - Kolkata",
        description: '☑ Deployed applications using Tomcat, ensuring proper functionality.\n\n☑ Verified and monitored server/desktop performance.\n\n☑ Automated build/release activities by creating and maintaining environments/tools.\n\n☑ Installed, updated patches, and applications, monitored network communication.\n\n☑ Implemented security policies, documented processes in an internal wiki.\n\n☑ Managed batch files, task scheduler, and performed Outlook troubleshooting.\n\n☑ Utilized Ticketing Tools for effective issue tracking and resolution.'
      },
    ]);
  
    
  
    const [achievements, setAchievements] = useState([
      {
        dates: "June, 2021",
        title: "2 x Hall of Fame from United Nations",
        subtitle: "Reported XSS vulnerability on unesco.org",
        description: "https://unite.un.org/content/hall-fame/list"
      },
      {
        dates: "June, 2021",
        title: "2 x Hall of Fame from European Union",
        subtitle: "Cross scripting vulnerability reported on europa.eu",
        description: "https://cert.europa.eu/hall-of-fame"
      },
      {
        dates: "January, 2021",
        title: "Hall of Fame from United Nations",
        subtitle: "Reported a XSS vulnerability on unodc.org",
        description: "https://unite.un.org/content/hall-fame/list"
      },
      {
        dates: "January, 2021",
        title: "Hall of Fame from European Union",
        subtitle: "Site misconfiguration issue was reported on europa.eu",
        description: "https://cert.europa.eu/hall-of-fame"
      },
      {
        dates: "2019",
        title: "Hall of Fame from Treebo Hotels",
        subtitle: "Site misconfiguration issue was reported on treebo.com",
        description: "https://www.treebo.com/security/"
      },
      {
        dates: "2019",
        title: "Hall of Fame from Nokia",
        subtitle: "Cross scripting vulnerability reported on nokia.com",
        description: "https://www.nokia.com/notices/responsible-disclosure/"
      },
      {
        dates: "2016",
        title: "Hall of Fame from Inflectra.com",
        subtitle: "Site misconfiguration issue was reported on Inflectra.com",
        description: "https://www.inflectra.com/company/responsible-disclosure.aspx"
      },
      {
        dates: "2016",
        title: "Acknowledgement from VMware",
        subtitle:"Site misconfiguration issue was reported on VMware.com",
        description: ""
      },
      {
        dates: "2016",
        title: "Acknowledgement from Eset Antivirus",
        subtitle: "Cross scripting vulnerability reported on eset.com",
        description: ""
      },
      {
        dates: "2016",
        title: "Hall of Fame from Microsoft",
        subtitle: "Cross scripting vulnerability reported on microsoft.com",
        description: "https://www.microsoft.com/en-us/msrc/researcher-acknowledgments-online-services-archive?rtc=1"        
      },
    ]);


    const [community, setCommunity] = useState([
      {
        dates: "Founded in 2020",
        title: "Technical Mentor",
        subtitle: "Banglasahitya.net",
        description: "Advised on technical issue and suggest on new implementation at one of popular bengali literature blog banglasahitya.net."
      },
    ]);

    return (
      <div className="col-grid">
        
        <div className="col">
          <h1>Experience</h1>
          <CardExp cardInfo={experience}/>
        </div>
        
        <div className="col">
          <h1>Achievements</h1>
          <Card cardInfo={achievements}/>

          <h1>Community Work</h1>
          <CardExp cardInfo={community}/>
        </div>

        {/* <div className="col">
          <h1>Community Work</h1>
          <CardExp cardInfo={community}/>
        </div>
         */}

      </div>

    )
}

export default Resume