import React from 'react';
import Input from '../Input/Input';
import CategoryButton from '../CategoryButton/CategoryButton';
import styles from './SearchInput.module.css';

// Simple SVG Search Icon
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18" // Slightly smaller
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  onCategoryClick,
  categoryLabel = "Browse",
}) => {
  return (
    <div className={styles.searchInputWrapper}>
      <CategoryButton label={categoryLabel} onClick={onCategoryClick} />
      <div className={styles.separator}></div>
      <div className={styles.inputFieldContainer}>
        <SearchIcon />
        <Input
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchInput;