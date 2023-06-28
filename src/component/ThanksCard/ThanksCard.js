import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import "./ThanksCard.css";

const ThanksCard = () => {
  const handleDone = () => {
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="thanks-card">
        <p>
          <RiCheckboxCircleFill />
        </p>
        <h3>Thank You!</h3>
        <p>
          Your message has been sent. Our support team will respond within 24
          hours
        </p>
        <button type="button" onClick={handleDone}>
          Done
        </button>
      </div>
    </React.Fragment>
  );
};

export default ThanksCard;
