export const PROFILE = {
  name: "Krishnendu Bhowmick",
  role: "Senior Platform Engineer III",
  org: "Nomura Research Institute",
  location: "Remote (Australia)",
  basedIn: "Kolkata, India",
  email: "krish.mailinfo@gmail.com",
  github: "https://github.com/bhowmickkrishnendu",
  linkedin: "https://www.linkedin.com/in/iamkrishnendu/",
  twitter: "https://twitter.com/whokrishnendu/",
  medium: "https://medium.com/@krishnendubhowmick",
  mediumHandle: "medium.com/@krishnendubhowmick",
};

export const STATS = [
  { value: "10+ yrs", label: "In production since February 2015" },
  { value: "50,000+", label: "Readers of my engineering writing" },
  { value: "10 orgs", label: "Published acknowledgement of a security report" },
];

export const FACTS = [
  { key: "Based in", value: "Kolkata, India" },
  { key: "Role", value: "Senior Platform Engineer III" },
  { key: "Program", value: "AWS Community Builder" },
  { key: "Available", value: "Remote & consulting" },
  { key: "Mentoring", value: "Banglasahitya.net" },
];

export const HOBBIES = [
  "☕ Coffee",
  "🎧 Music",
  "📸 Photography",
  "🚴 Cycling",
  "📚 Reading",
];

export type Tier = {
  n: string;
  title: string;
  blurb: string;
  items: string[];
};

export const TIERS: Tier[] = [
  {
    n: "Tier 01 · Daily drivers",
    title: "daily",
    blurb: "What I reach for without thinking. Most of a working week happens here.",
    items: [
      "AWS", "Terraform", "Kubernetes", "Docker", "Amazon EKS", "Helm",
      "Linux", "Python", "Bash", "Git", "GitHub Actions", "Jenkins",
    ],
  },
  {
    n: "Tier 02 · Run in production",
    title: "production",
    blurb: "Shipped, operated and debugged on real systems, if not every day.",
    items: [
      "OCI", "Azure", "GCP", "Ansible", "AWS CDK", "GitLab CI/CD", "ArgoCD",
      "Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Zabbix",
      "PostgreSQL", "MySQL", "Redis", "DynamoDB",
      "Nginx", "Kafka", "Nexus", "SonarQube", "Trivy", "Podman",
      "IAM / WAF", "Secrets management",
    ],
  },
  {
    n: "Tier 03 · Learning now",
    title: "learning",
    blurb: "Bridging infrastructure and intelligent systems. Building with these, not claiming them yet.",
    items: [
      "RAG systems", "vLLM / Ollama", "MLflow", "Kubeflow", "Seldon Core",
      "Weaviate / Pinecone", "Model registries", "GPU nodes on K8s", "Langfuse",
      "Feature stores", "Airflow", "LangChain / LlamaIndex",
    ],
  },
];

export type Project = {
  link: string;
  background: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    link: "https://github.com/bhowmickkrishnendu/confluence-knowledge-assistant",
    background: "rag.png",
    category: "AI / ML",
    title: "Confluence HybridRAG",
    description:
      "Enterprise RAG platform for Confluence with hybrid search, Gemini-powered answers, conversation memory, analytics and secure authentication.",
    tech: ["py.png", "gemini.png", "docker.png", "sp.png"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/hybrid_ai_assignment_e_commerce_complaint",
    background: "ai.png",
    category: "AI / ML",
    title: "Hybrid AI Complaint Triage",
    description:
      "Model for an e-commerce company handling a high volume of customer complaints, predicting which ones are at risk of escalation.",
    tech: ["py.png", "gemini.png", "docker.png", "tf.png"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/react-cicd-devops-pipeline",
    background: "devops.jpg",
    category: "DevOps automation",
    title: "React CI/CD Pipeline",
    description:
      "Production-grade React app with an end-to-end pipeline: GitHub Actions, SonarQube quality gates, Trivy scanning, Docker, plus Slack and mail notifications.",
    tech: ["react.png", "github.png", "sonarqube.png", "docker.png", "slack.png", "email.png", "cicd.png"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/AWS-With-Terraform",
    background: "awstf.jpg",
    category: "Infrastructure automation",
    title: "AWS with Terraform",
    description:
      "A working collection of Terraform modules and examples for managing AWS infrastructure: networking, compute, and the wiring in between.",
    tech: ["aws.svg", "terraform.svg"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/apache-docker-demo",
    background: "cicd.jpeg",
    category: "CI/CD pipeline",
    title: "Apache Server CI/CD",
    description:
      "Jenkins picks up a GitHub webhook, builds the Docker image, pushes it to the registry and rolls it out to Kubernetes. The whole loop, automated.",
    tech: ["git.jpeg", "apache.jpg", "jenkins.jpg", "docker.jpg", "k8s.png"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/k8sobjects",
    background: "k8swall.jpg",
    category: "Kubernetes",
    title: "Kubernetes Objects",
    description:
      "A reference set of Kubernetes objects in YAML, one concept per file, written to be read as much as applied.",
    tech: ["k8s.png"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/banglasahitya.net",
    background: "protege.jpg",
    category: "Android",
    title: "Banglasahitya.net",
    description:
      "An Android WebView client for one of the most popular Bengali literature blogs, where I also mentor on the technical side.",
    tech: ["android.jpg"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/covid19-india",
    background: "medistat.jpg",
    category: "Python",
    title: "Covid19 Tracker",
    description: "A state-wise Covid-19 tracker for India, built as a desktop application with live data.",
    tech: ["py.png", "pyqt.png"],
  },
  {
    link: "https://github.com/bhowmickkrishnendu/basicsysteminfo",
    background: "gtc2.jpg",
    category: "Python",
    title: "Basic System Info",
    description:
      "Reads and reports the hardware inventory of a machine. A small utility that turned into a useful habit.",
    tech: ["py.png", "pyqt.png"],
  },
];

export type Role = {
  date: string;
  org: string;
  location: string;
  title: string;
  duties: string[];
};

export const ROLES: Role[] = [
  {
    date: "Since Apr 2026",
    org: "Nomura Research Institute",
    location: "Remote (Australia)",
    title: "Senior Platform Engineer III",
    duties: [
      "Build and operate AWS platform infrastructure across multiple accounts and multiple environments, with every change made through Terraform.",
      "Run EKS clusters across development, staging and production, keeping workloads consistent from one environment to the next.",
      "Package and ship workloads with Helm, driving releases through GitHub and GitHub Actions pipelines.",
      "Write and maintain automation in Python, Ansible, Bash and PowerShell to take routine work off the team.",
      "Operate the ELK Stack for logging and investigation across environments.",
      "Provide BAU support for the platform and keep documentation current, so the next person can pick it up without a handover call.",
      "Keep the platform tooling current, from Terraform and provider versions to Helm charts and Actions runners, so upgrades land before they turn into security findings.",
      "Work directly with application teams to turn what they ask for into self-service workflows they can run without raising a ticket.",
      "Watch spend across the AWS accounts and right-size cluster capacity, so environments stop costing money when nobody is using them.",
      "Move the last manual release steps into GitHub Actions, so shipping is a merge rather than a runbook.",
    ],
  },
  {
    date: "Dec 2024 to Mar 2026",
    org: "Nomura Research Institute",
    location: "Kolkata",
    title: "Senior DevOps Engineer II",
    duties: [
      "Architected and deployed secure, scalable infrastructure on AWS and OCI for high-availability systems.",
      "Automated infrastructure and cloud operations, reducing manual tasks and optimising hosting costs.",
      "Enhanced CI/CD pipelines using Jenkins and GitLab CI in Agile-based product environments.",
      "Implemented Infrastructure as Code with Terraform for version-controlled, repeatable deployments.",
      "Delivered end-to-end cloud-native solutions with containerised microservices on Amazon EKS.",
      "Transformed business requirements into DevOps workflows through stakeholder collaboration.",
      "Developed automation scripts using Python, Ansible and AWS Lambda to boost operational efficiency.",
      "Provided production support and incident resolution to ensure system reliability and uptime.",
      "Managed the DevOps toolchain lifecycle, including upgrades, integrations and security compliance.",
      "Achieved near-total automation of build and deploy workflows using CI/CD best practices.",
    ],
  },
  {
    date: "Aug 2023 to Nov 2024",
    org: "HashCash Consultants",
    location: "Kolkata",
    title: "AWS DevOps Engineer",
    duties: [
      "Architected and maintained AWS cloud components including EC2, S3, VPCs and IAM.",
      "Optimised resource allocation, cost efficiency and security across the estate.",
      "Automated infrastructure with Terraform, managing EKS, ECS, SNS, Route 53, autoscaling and CloudWatch.",
      "Automated provisioning and configuration using Infrastructure as Code.",
      "Designed, deployed and managed Kubernetes clusters for containerised applications.",
      "Implemented best practices for containerisation, resource utilisation and security.",
      "Troubleshot and resolved Kubernetes and Docker-related issues.",
      "Developed CI/CD pipelines using Git, Jenkins and related tooling.",
      "Automated application builds, testing and deployment processes.",
      "Collaborated with development teams on code integration, version control and release management.",
      "Configured Nexus for artifact and dependency storage.",
      "Set up Prometheus and Grafana monitoring dashboards, alerts and reports.",
      "Proactively identified and resolved performance bottlenecks, conducting root cause analysis.",
      "Designed solutions across DevOps, cloud, virtualisation and storage technologies.",
    ],
  },
  {
    date: "Aug 2016 to Aug 2023",
    org: "Landmark Group",
    location: "Kolkata, Chennai & Bangalore",
    title: "Executive, Information Technology (Application & Infra Support)",
    duties: [
      "Deployed and supported Apache Tomcat, Oracle Retail POS, Oracle BI and middleware applications.",
      "Managed network, cloud and bare-metal servers for efficient business operation.",
      "Monitored and reported infrastructure and application issues, troubleshooting outages and improving performance.",
      "Upgraded systems with new releases and developed the expertise to train staff on emerging technologies.",
      "Set up new build environments for applications on Windows and Linux, troubleshooting deployment issues.",
      "Architected, provisioned and maintained cloud infrastructure for disaster recovery and high availability.",
      "Collaborated with end users on project and task delivery, maintaining process documentation.",
      "Worked with scripting languages including Shell and Batch.",
      "Operated ticketing tools for issue tracking across three cities.",
    ],
  },
  {
    date: "Feb 2015 to Apr 2016",
    org: "Webbings",
    location: "Kolkata",
    title: "System Administrator",
    duties: [
      "Deployed applications using Tomcat, ensuring proper functionality.",
      "Verified and monitored server and desktop performance.",
      "Automated build and release activities by creating and maintaining environments and tools.",
      "Installed and updated patches and applications, monitoring network communication.",
      "Implemented security policies and documented processes in an internal wiki.",
      "Managed batch files and task scheduler, and performed Outlook troubleshooting.",
      "Used ticketing tools for effective issue tracking and resolution.",
    ],
  },
];

export type Ack = {
  org: string;
  year: string;
  host: string;
  what: string;
  times?: string;
  link?: string;
};

export const ACKS: Ack[] = [
  { org: "United Nations", year: "Jun 2021", host: "unesco.org", what: "Cross-site scripting", times: "×2", link: "https://unite.un.org/content/hall-fame/list" },
  { org: "European Union", year: "Jun 2021", host: "europa.eu", what: "Cross-site scripting", times: "×2", link: "https://cert.europa.eu/hall-of-fame" },
  { org: "United Nations", year: "Jan 2021", host: "unodc.org", what: "Cross-site scripting", link: "https://unite.un.org/content/hall-fame/list" },
  { org: "European Union", year: "Jan 2021", host: "europa.eu", what: "Site misconfiguration", link: "https://cert.europa.eu/hall-of-fame" },
  { org: "Nokia", year: "2019", host: "nokia.com", what: "Cross-site scripting", link: "https://www.nokia.com/notices/responsible-disclosure/" },
  { org: "Treebo Hotels", year: "2019", host: "treebo.com", what: "Site misconfiguration", link: "https://www.treebo.com/security/" },
  { org: "Microsoft", year: "2016", host: "microsoft.com", what: "Cross-site scripting", link: "https://msrc.microsoft.com/update-guide/acknowledgement/archive" },
  { org: "Inflectra", year: "2016", host: "inflectra.com", what: "Site misconfiguration", link: "https://www.inflectra.com/company/responsible-disclosure.aspx" },
  { org: "VMware", year: "2016", host: "vmware.com", what: "Site misconfiguration" },
  { org: "ESET", year: "2016", host: "eset.com", what: "Cross-site scripting" },
];
