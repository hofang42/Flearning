import React from "react";
import "./Card.css";

// SVG Components
export const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
      fill="#FFB400"
    />
  </svg>
);

export const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g>
      <circle cx="10" cy="7" r="4" stroke="#7B7B7B" strokeWidth="1.5" />
      <path
        d="M2 18c0-3.87 3.13-7 7-7h2c3.87 0 7 3.13 7 7"
        stroke="#7B7B7B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
      stroke="#6E7A8A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4V8L10.6667 9.33333"
      stroke="#6E7A8A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LevelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 14L2 8.5"
      stroke="#6E7A8A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 14L8 2"
      stroke="#6E7A8A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 14L14 5.5"
      stroke="#6E7A8A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Card = ({ image, category, price, title, rating, students }) => (
  <div className="card-container">
    <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
    <div className="divider" />
    <div className="card-body">
      <div className="row">
        <div className="category">{category}</div>
        <div className="price">
          <span className="orange-gradient">{price}</span>
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="footer">
        <div className="rating">
          <StarIcon />
          {rating}
        </div>
        <div className="students">
          <UserIcon />
          {students}
        </div>
      </div>
    </div>
  </div>
);

export const DetailedCard = ({
  title,
  author,
  authorAvatar,
  rating,
  ratingCount,
  students,
  level,
  duration,
  price,
  oldPrice,
  discount,
  learnList,
}) => (
  <div className="detailed-card-container">
    <div className="detailed-card-body">
      <h3 className="detailed-title">{title}</h3>

      <div className="author-row">
        <div className="author-info">
          <div
            className="author-avatar"
            style={{ backgroundImage: `url(${authorAvatar})` }}
          />
          <div className="author-name">
            Course by
            <strong>{author}</strong>
          </div>
        </div>
        <div className="rating-info">
          <StarIcon />
          {rating}
          <span style={{ color: "#6E7A8A" }}>({ratingCount})</span>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <UserIcon />
          {students} students
        </div>

        <div className="stat-item">
          <LevelIcon />
          {level}
        </div>

        <div className="stat-item">
          <ClockIcon />
          {duration}
        </div>
      </div>

      <div className="price-row">
        <div className="current-price">
          <span className="orange-gradient">{price}</span>
        </div>
        <div className="old-price">{oldPrice}</div>
        <div className="discount">{discount}</div>
      </div>

      <div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            marginBottom: "16px",
            color: "#1d2026",
          }}
        >
          What you'll learn
        </div>
        <ul className="learn-list">
          {learnList.map((item, index) => (
            <li key={index} className="learn-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button className="button">Add To Cart</button>
      <button className="detail-button">Course Detail</button>
    </div>
  </div>
);

export default Card;
