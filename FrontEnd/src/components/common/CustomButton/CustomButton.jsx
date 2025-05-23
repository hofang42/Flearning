import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.scss";

const CustomButton = ({
  size = "medium", //small, medium, large
  color = "primary", // primary, secondary, success,gray, error, warning
  disabled = false, // true, false
  iconUrl = null, // URL of the icon
  iconPosition = "left", // left, right
  filter = false, // true, false
  filterCount = 0, // number of items in the filter
  type = "normal", // normal, underline, square, circle
  isTransparent = false, // true, false
  onClick = () => {},
  children,
}) => {
  const className = `btn ${size} ${color} ${filter ? "filter" : ""} ${type} ${
    isTransparent ? "transparent" : ""
  }`;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {(type === "normal" || type === "underline") && (
        <span className="btn-content">
          {iconUrl && iconPosition === "left" && (
            <img src={iconUrl} alt="icon" className="icon left" />
          )}
          <span className="btn-text">{children}</span>
          {iconUrl && iconPosition === "right" && (
            <img src={iconUrl} alt="icon" className="icon right" />
          )}
        </span>
      )}

      {(type === "square" || type === "circle") && iconUrl && (
        <img src={iconUrl} alt="icon" className="icon only-icon" />
      )}

      {filter && filterCount > 0 && (
        <span className="filter-badge">{filterCount}</span>
      )}
    </button>
  );
};

CustomButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  iconUrl: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  filter: PropTypes.bool,
  filterCount: PropTypes.number,
  type: PropTypes.oneOf(["normal", "underline", "square", "circle"]),
  isTransparent: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CustomButton;
