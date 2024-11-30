import React, { useState } from 'react';
import styles from './styling/table.css';

const Table = ({ headers, data, actionLabel, onActionClick }) => {

  const [sortConfig, setSortConfig] = useState(null); 
  const [filterConfig, setFilterConfig] = useState({}); 
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle sorting
  const handleSort = (header) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === header && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: header, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[header] < b[header]) return direction === 'asc' ? -1 : 1;
      if (a[header] > b[header]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };

  // Function to handle filtering
  const handleFilter = (header, value) => {
    const newFilterConfig = { ...filterConfig, [header]: value };
    setFilterConfig(newFilterConfig);

    const filtered = data.filter((row) =>
      Object.keys(newFilterConfig).every((key) => {
        if (!newFilterConfig[key]) return true; 
        return String(row[key]).toLowerCase().includes(newFilterConfig[key].toLowerCase());
      })
    );

    setFilteredData(filtered);
  };

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                <div className="tableHeader">
                  <span onClick={() => handleSort(header)} style={{ cursor: 'pointer' }}>
                    {header} {sortConfig?.key === header ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                  </span>
                  <input
                    type="text"
                    placeholder={`${header}`}
                    onChange={(e) => handleFilter(header, e.target.value)}
                    className="filterInput"
                  />
                </div>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
              <td>
                <button
                  className="actionButton"
                  onClick={() => onActionClick(row)}
                >
                  {actionLabel}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
