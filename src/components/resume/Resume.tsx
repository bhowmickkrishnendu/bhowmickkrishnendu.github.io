import {useState} from 'react';
import Card from "../Card";
import './resume.css';


const Resume = () => {

  const [educaton, setEducation] = useState([
    {
      dates: "Batch of 2014",
      title: "BCA, Information Technology",
      subtitle: "PTU, Kolkata",
      description: "Percentage: 74%"
    },
    {
      dates: "Batch of 2011",
      title: "Grade XII",
      subtitle: "Chaipat High School, West Medinipur, West Bengal",
      description: "Percentage: 52%"
    },
    {
      dates: "Batch of 2009",
      title: "Grade X",
      subtitle: "Chaipat High School, West Medinipur, West Bengal",
      description: "Percentage: 60%"
    },
  ]);


  const [experience, setExperience] = useState([
      {
        dates: "August 2016 – Current",
        title: "Executive – Information Technology (Application and Infra Support)",
        subtitle: "Landmark Group - Kolkata, Chennai & Bangalore",
        description: "Oracle Retail POS, Other Oracle application support.\nMonitoring and resolving data and log file issue.\nManage network, servers, desktop and technology tools.\nMonitor performance and maintain systems according to requirements.\nTroubleshoot issues and outages.\nUpgrade systems with new releases and models.\nDevelop expertise to train staff on new technologies.\nSetting up the new build environment for various applications in Windows/Linux environment.\nExpertise in Installation, Configuration, Administration and Maintenance of Oracle Retail POS Application.\nAbility to trouble shoot build and deployment issues.\nInvolved in Bare Metal Restore.\nAttending the calls, meetings with the end users to ensure smooth project / task delivery.\nMonitor patch release and provide proactive support to resolve any application issues.\nInvolved in Performance Optimization.\nInvolved in Disaster Recovery and High Availability.\nInvolved in the documentation of all the process and procedures.\nPerformed weekly and monthly health checks of application.\nWorked with scripting language like Shell Scripting, and Batch.\nBuild an internal wiki with technical documentation, manuals and IT policies.\nExperience on Ticketing Tools."
      },
      {
        dates: "February 2015 – April 2016",
        title: "System Administrator",
        subtitle: "Webbings - Kolkata",
        description: 'Involved in deployment of the application using Tomcat.\nVerify that application are working properly\nMonitor server and desktop performance\nCreate & maintain environment & tools to automate build/release activities.\nInstall, update patch and application.\nMonitor network communication\nSetup security policies for users\nDocumentation in form of internal wiki\nManage Batch File and task scheduler\nMonitor Server and desktop performance\nOutlook Troubleshooting\nExperience on Ticketing Tools.'
      },
    ]);
  
    
  
    const [achievements, setAchievements] = useState([
      {
        dates: "June, 2021",
        title: "2 x Hall of Fame from United Nations",
        subtitle: "Reported XSS vulnerability on unesco.org",
        description: "Hall of fame on https://unite.un.org/content/hall-fame/list"
      },
      {
        dates: "June, 2021",
        title: "2 x Hall of Fame from European Union",
        subtitle: "Cross scripting vulnerability reported on europa.eu",
        description: "Hall of fame on https://cert.europa.eu/hall-of-fame"
      },
      {
        dates: "January, 2021",
        title: "Hall of Fame from United Nations",
        subtitle: "Reported a XSS vulnerability on unodc.org",
        description: "Hall of fame on https://unite.un.org/content/hall-fame/list"
      },
      {
        dates: "January, 2021",
        title: "Hall of Fame from European Union",
        subtitle: "Site misconfiguration issue was reported on europa.eu",
        description: "Hall of fame on https://cert.europa.eu/hall-of-fame"
      },
      {
        dates: "2019",
        title: "Hall of Fame from Treebo Hotels",
        subtitle: "Site misconfiguration issue was reported on treebo.com",
        description: "Hall of fame on https://www.treebo.com/security/"
      },
      {
        dates: "2019",
        title: "Hall of Fame from Nokia",
        subtitle: "Cross scripting vulnerability reported on nokia.com",
        description: "Hall of fame on https://www.nokia.com/notices/responsible-disclosure/"
      },
      {
        dates: "2016",
        title: "Hall of Fame from Inflectra.com",
        subtitle: "Site misconfiguration issue was reported on Inflectra.com",
        description: "Hall of fame on https://www.inflectra.com/company/responsible-disclosure.aspx"
      },
      {
        dates: "2016",
        title: "Acknowledgement from VMware",
        subtitle:"Site misconfiguration issue was reported on VMware.com",
        description: "VMware workstation subscription and VMware goodies given as a token of appreciation."
      },
      {
        dates: "2016",
        title: "Acknowledgement from Eset Antivirus",
        subtitle: "Cross scripting vulnerability reported on eset.com",
        description: "A thank you note and Eset subscription given as a token of appreciation."
      },
      {
        dates: "2016",
        title: "Hall of Fame from Microsoft",
        subtitle: "Cross scripting vulnerability reported on microsoft.com",
        description: "Hall fame on  https://www.microsoft.com/en-us/msrc/researcher-acknowledgments-online-services-archive?rtc=1"        
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
          <Card cardInfo={experience}/>
        </div>

        <div className="col">
          <h1>Education</h1>
          <Card cardInfo={educaton}/>
        </div>
        
        <div className="col">
          <h1>Achievements</h1>
          <Card cardInfo={achievements}/>
        </div>

        <div className="col">
          <h1>Community Work</h1>
          <Card cardInfo={community}/>
        </div>
        
      </div>

    )
}

export default Resume