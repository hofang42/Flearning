import React, { useState, useEffect, useRef } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import DropdownList from '../DropdownList/DropdownList';
import styles from './SearchBox.module.css';

const SearchBox = ({
  data = [],
  placeholder = "Search...",
  onSelect,
  onCategoryClick, // New prop
  categoryLabel = "Browse", // New prop
  containerClassName // For custom styling from parent
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
      setIsDropdownVisible(results.length > 0);
    } else {
      setFilteredData([]);
      setIsDropdownVisible(false);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    if (searchTerm && filteredData.length > 0) {
      setIsDropdownVisible(true);
    }
  };

  const handleItemClick = (item) => {
    setSearchTerm(item.label);
    setIsDropdownVisible(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div className={`${styles.searchBoxContainer} ${containerClassName || ''}`} ref={searchBoxRef}>
      <SearchInput
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        onCategoryClick={onCategoryClick} // Pass down
        categoryLabel={categoryLabel}   // Pass down
      />
      <DropdownList
        items={filteredData}
        onItemClick={handleItemClick}
        isVisible={isDropdownVisible}
      />
    </div>
  );
};

export default SearchBox;