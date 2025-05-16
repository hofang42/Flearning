import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  size = "medium", // large, medium, small
  color = "primary", // primary, secondary, grey, success, warning, error
  disabled = false,
  iconUrl = null, // URL string for icon image
  iconPosition = "left", // 'left' or 'right'
  filter = false,
  filterCount = 0, // number for filter badge
  children,
}) => {
  const className = `btn ${size} ${color} ${filter ? "filter" : ""}`;

  return (
    <button className={className} disabled={disabled}>
      {iconUrl && iconPosition === "left" && (
        <img src={iconUrl} alt="icon" className="icon left" />
      )}
      <span className="btn-text">{children}</span>
      {iconUrl && iconPosition === "right" && (
        <img src={iconUrl} alt="icon" className="icon right" />
      )}
      {filter && filterCount > 0 && (
        <span className="filter-badge">{filterCount}</span>
      )}
    </button>
  );
};

export default CustomButton;
