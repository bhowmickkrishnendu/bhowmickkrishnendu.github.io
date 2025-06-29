import React from "react"

interface IProps {
    cardInfo: {
        dates: string
        title: string
        subtitle: string
        description: string
    }[]
}

const Card: React.FC<IProps> = ({ cardInfo }) => {

    const renderCardInfo = () : JSX.Element[] =>{
        return cardInfo.map(card => {
            return (
                <li className="card">
                    <div className="date">{card.dates}</div>
                    <h4 className="card_title">{card.title}</h4>
                    <div className="card_subtitle">{card.subtitle}</div>

                    <div className="card_desc1">

    <div>
    {card.description === ''
      ? <span className="card_desc1 inactive" >#</span>
      : <a className="card_desc1 " href={card.description} target="_blank" rel="noopener noreferrer">Hall of Fame</a>
    }
  </div> 
                        </div>
                </li>
            )
        })
    }

    return (
        <ul>{renderCardInfo()}</ul>
    )
}

export default Card