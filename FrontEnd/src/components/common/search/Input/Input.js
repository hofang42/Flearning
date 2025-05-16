import React from 'react';
import styles from './Input.module.css';

const Input = ({ value, onChange, onFocus, onBlur, placeholder, ...props }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;