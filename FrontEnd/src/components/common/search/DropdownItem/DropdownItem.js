import React from 'react';
import styles from './DropdownItem.module.css';

const DropdownItem = ({ item, onClick }) => {
  return (
    <li className={styles.dropdownItem} onClick={() => onClick(item)}>
      {item.label}
    </li>
  );
};

export default DropdownItem;