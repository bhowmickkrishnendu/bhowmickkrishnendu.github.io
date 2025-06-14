import './projects.css';

interface IProps {
    urls: string[]
}

function TechStack ({urls}: IProps) {
    console.log(urls)
    return (
        <div className="techstack">
            {
                urls.map(function(val) {
                    const img = require(`./techstack/${val}`);
                    const altText = val.split('.')[0];
                    return <img className="tech" src={img} alt={altText} />
                })
            }
        </div>
    )
}

export default TechStack