import React, { useState, useRef, useEffect } from "react";
import Card, { DetailedCard } from "./Card";
import "./Card.css";

const PopupCard = ({ cardProps, detailedProps, hoverDelay = 200 }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState("right");
  const timerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      // Xác định vị trí card
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;
        // Giả sử popup rộng 400px, margin 8px
        if (spaceRight < 420 && spaceLeft > 420) {
          setPopupPosition("left");
        } else {
          setPopupPosition("right");
        }
      }
      setShowPopup(true);
    }, hoverDelay);
  };

  const handleMouseLeave = (e) => {
    // Check if we're moving to the popup or its children
    const relatedTarget = e.relatedTarget;
    if (
      !relatedTarget ||
      !(relatedTarget instanceof Node) ||
      !wrapperRef.current ||
      !cardRef.current
    ) {
      clearTimer();
      setShowPopup(false);
      return;
    }

    const isMovingToPopup =
      wrapperRef.current.contains(relatedTarget) ||
      relatedTarget === wrapperRef.current;

    const isMovingToCard =
      cardRef.current.contains(relatedTarget) ||
      relatedTarget === cardRef.current;

    if (!isMovingToPopup && !isMovingToCard) {
      clearTimer();
      setShowPopup(false);
    }
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return (
    <div
      className="card-wrapper"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`popup-wrapper ${showPopup ? "visible" : "hidden"} ${popupPosition}`}
        ref={wrapperRef}
        onMouseLeave={handleMouseLeave}
      >
        <DetailedCard {...detailedProps} />
        <div className="pointer" />
      </div>
      <Card {...cardProps} />
    </div>
  );
};

export default PopupCard;
