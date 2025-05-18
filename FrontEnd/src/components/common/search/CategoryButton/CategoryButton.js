import React from 'react';
import styles from './CategoryButton.module.css';

const ChevronDownIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: '6px' }}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CategoryButton = ({ label = "Browse", onClick }) => {
  return (
    <button type="button" className={styles.categoryButton} onClick={onClick}>
      <span>{label}</span>
      <ChevronDownIcon />
    </button>
  );
};

export default CategoryButton;