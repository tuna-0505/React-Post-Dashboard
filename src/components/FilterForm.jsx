import React from 'react';

const FilterForm = ({ filterText, onFilterChange }) => {
  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    fontSize: '15px',
    marginBottom: '20px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

export default FilterForm;
