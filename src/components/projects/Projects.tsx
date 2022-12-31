import './projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            link: "https://github.com/bhowmickkrishnendu/apache-docker-demo",
                // background: "cicd.jpeg",
            background: "bg4",
            category: "CICD Pipeline Project",
            title: "Apache Server CICD Pipeline",
            subtitle: "Using Github hook jenkins pull the data. Integrated docker will compile the dockerfile and ssh agent push the docker image to registry. SSH agent execute kubernetes command on k8s master node to make application live.",
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