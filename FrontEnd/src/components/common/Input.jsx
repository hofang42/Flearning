import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./input.css";

const Input = ({
  text = "Input",
  variant,
  icon,
  counter,
  maxCount,
  rightIcon,
  price,
  currency,
  placeholder,
  options,
  success,
  error,
  type = "text",
  textarea,
  value,
  onChange,
  className,
  ...props
}) => {
  const [selectedText, setSelectedText] = useState(text);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedText(option);
    setShowDropdown(false);
  };

  const renderInput = () => {
    if (textarea) {
      return (
        <textarea
          className="form-control"
          placeholder={placeholder || text}
          value={value}
          onChange={onChange}
          {...props}
        />
      );
    }

    return (
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""} ${success ? "is-valid" : ""}`}
        placeholder={placeholder || text}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  };

  if (!variant) {
    return <div className={`mb-3 ${className || ""}`}>{renderInput()}</div>;
  }

  if (variant === "label") {
    return (
      <div className={`mb-3 ${className || ""}`}>
        <label className="form-label">{text}</label>
        {renderInput()}
      </div>
    );
  }

  if (variant === "counter") {
    return (
      <div className="mb-3">
        <label className="form-label">{text}</label>
        <div className="position-relative">
          <input
            type="text"
            className="form-control pe-5"
            placeholder={placeholder || text}
            value={value}
            onChange={onChange}
            maxLength={maxCount}
            {...props}
          />
          <span className="counter-text position-absolute end-0 top-50 translate-middle-y text-muted me-2">
            {counter}/{maxCount}
          </span>
        </div>
      </div>
    );
  }

  if (variant === "iconDivider") {
    return (
      <div className={`mb-3 ${className || ""}`}>
        {text && <label className="form-label">{text}</label>}
        <div className="form-control d-flex align-items-center px-2 input-icon-divider">
          <div className="icon-box text-warning border-end">
            <i className={icon}></i>
          </div>
          <input
            type="text"
            className="flex-grow-1 border-0 shadow-none outline-none"
            placeholder={placeholder || text}
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
      </div>
    );
  }

  if (variant === "priceInput") {
    return (
      <div className={`mb-3 ${className || ""}`}>
        <label className="form-label fw-bold mb-2">{text}</label>
        <div className="d-flex align-items-center form-control px-2 input-price">
          <div className="icon-box text-warning">
            <i className={icon}></i>
          </div>
          <input
            type="text"
            className="flex-grow-1 border-0 shadow-none outline-none"
            placeholder={placeholder || "Course price..."}
            value={value}
            onChange={onChange}
            {...props}
          />
          <span className="text-muted ms-2 currency-label">{currency}</span>
        </div>
      </div>
    );
  }

  if (variant === "iconInside") {
    return (
      <div className={`mb-3 ${className || ""}`}>
        {rightIcon && text && <label className="form-label mb-1">{text}</label>}
        <div className="position-relative">
          {icon && (
            <i className={`input-icon-left ${icon}`} />
          )}
          <input
            type="text"
            className={`form-control ${icon ? "ps-5" : ""} ${rightIcon ? "pe-5" : ""}`}
            placeholder={placeholder || ""}
            value={value}
            onChange={onChange}
            {...props}
          />
          {rightIcon && (
            <i className={`input-icon-right ${rightIcon}`} />
          )}
        </div>
      </div>
    );
  }

  if (variant === "success" || variant === "error") {
    const iconClass =
      variant === "success"
        ? "fas fa-check-circle text-success"
        : "fas fa-exclamation-triangle text-danger";
    const boxClass = variant === "success" ? "input-box-success" : "input-box-error";

    return (
      <div className="mb-3">
        <div className={`position-relative border rounded ${boxClass}`}>
          <input
            type="text"
            className="form-control pe-5 bg-transparent border-0"
            placeholder={text}
            value={value}
            onChange={onChange}
            {...props}
          />
          <i className={`input-icon-right-feedback ${iconClass}`} />
        </div>
      </div>
    );
  }

  if (variant === "dropdown") {
    return (
      <div className={`mb-3 ${className || ""}`} ref={dropdownRef}>
        <div className="dropdown">
          <button
            className="form-select d-flex justify-content-between align-items-center"
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedText}
          </button>
          {options && showDropdown && (
            <ul className="dropdown-menu show w-100">
              {options.map((option, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-3 ${className || ""}`}>
      <label className="form-label">{text}</label>
      {renderInput()}
    </div>
  );
};

export default Input;
