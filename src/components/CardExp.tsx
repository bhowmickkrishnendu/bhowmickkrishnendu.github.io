import React from "react"

interface IProps {
  cardInfo: {
    dates: string
    title: string
    subtitle: string
    description: string[] | string
  }[]
}

const CardExp: React.FC<IProps> = ({ cardInfo }) => {
  const renderCardInfo = (): JSX.Element[] => {
    return cardInfo.map((card, index) => (
      <li className="card" key={index}>
        <div className="date">{card.dates}</div>
        <h4 className="card_title">{card.title}</h4>
        <div className="card_subtitle">{card.subtitle}</div>
        <div className="card_desc">
        {Array.isArray(card.description) ? (
  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
    {card.description.map((line, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span style={{ color: "#4CAF50" }}>✔️</span>
        <span style={{ color: "#000000" }}>{line}</span>
      </div>
    ))}
  </div>
) : (
  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: "#000000" }}>
    <span style={{ color: "#4CAF50" }}>✔️</span> {card.description}
  </div>
)}


        </div>
      </li>
    ));
  };

  return <ul>{renderCardInfo()}</ul>;
};

export default CardExp;
