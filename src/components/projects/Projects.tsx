import './projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            link: "https://github.com/bhowmickkrishnendu/AWS-With-Terraform",
                // background: "awstf.jpg",
            background: "bg6",
            category: "Infrastructure Automation",
            title: "AWS with Terraform",
            subtitle: "AWS-With-Terraform is a collection of Terraform modules and code examples for managing infrastructure on Amazon Web Services (AWS).",
            tech:[
                "aws.svg",
                "terraform.svg"]
        },

        {
            link: "https://github.com/bhowmickkrishnendu/apache-docker-demo",
                // background: "cicd.jpeg",
            background: "bg4",
            category: "CICD Pipeline Project",
            title: "Apache Server CICD Pipeline",
            subtitle: "Automate CI/CD pipeline with Jenkins GitHub webhook triggering Docker build, image push to registry, and Kubernetes deployment for application activation.",
            tech:[
                "git.jpeg",
                "apache.jpg",
                "jenkins.jpg",
                "docker.jpg",
                "k8s.png"]
        },

        {
            link: "https://github.com/bhowmickkrishnendu/k8sobjects",
            // background: "k8swall.jpg",
            background: "bg5",
            category: "Kubernetes",
            title: "Kubernetes Objects Concept",
            subtitle: "A set of k8s objects in YAML file with example concept.",
            tech:[
                "k8s.png",
            ]
        },
        
        {
            link: "https://github.com/bhowmickkrishnendu/banglasahitya.net",
            // background: "protege.jpg",
            background: "bg1",
            category: "Android Webview Project",
            title:"Banglasahitya.net",
            subtitle: "A bengali blog in android Webview app.",
            tech: [
                "android.jpg",
            ]
        },
        {
            link: "https://github.com/bhowmickkrishnendu/covid19-india",
            // background: "medistat.jpg",
            background: "bg2",
            category: "Python Project",
            title: "Covid19 Tracker",
            subtitle: "India's state wise Covid19 tracker.",
            tech:[
                "py.png",
                "pyqt.png",
            ]
        },
        
        {
            link: "https://github.com/bhowmickkrishnendu/basicsysteminfo",
            // background: "gtc2.jpg",
            background: "bg3",
            category: "Python Project",
            title: "Basic System Info",
            subtitle: "Basic Hardware Information of a system",
            tech:[
                "py.png",
                "pyqt.png",
            ]
        },

    ]

    return (
        <div id="project-sec">
            <div>
                <p className="heading sec">Featured <strong>Projects</strong></p>
            </div>

            
            <div className="card-grid">
                <ProjectCard info={projects} />
            </div>
        </div>
    )
}

export default Projects