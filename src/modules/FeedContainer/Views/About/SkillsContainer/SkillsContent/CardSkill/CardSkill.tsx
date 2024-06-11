import Signal from "@/assets/icon/Signal";
import React, { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";

interface ICardSkill {
  icon: JSX.Element;
  title: string;
  value: number;
}

const CardSkill: FC<ICardSkill> = ({ icon, title, value }) => {
  // Estado que maneja la tarjeta
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Manejador del evento
  const handleFlip = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <div className="flip-card_front" onClick={handleFlip}>
          {icon}
        </div>
        <div className="flip-card_back" onClick={handleFlip}>
          <div className="flip-card_title">{title}</div>
          <div className="flip-card_content">
            <Signal value={value} />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardSkill;
