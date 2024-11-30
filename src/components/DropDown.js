import React, { useState } from "react";
import './styling/dropdown.css';

function Dropdown({ options = [], placeholder = "Selecteer een optie" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(placeholder);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelect = (option) => {
      setSelectedItem(option);
      setIsOpen(false);
    };
  
    return (
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem}
          <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  export default Dropdown;
  