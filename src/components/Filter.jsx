import React, { useState, useRef } from "react";
import "./Filter.css";

const Filter = ({ buttonName, dropdownContent }) => {
  const [opened, setOpened] = useState(false);
  const dropdownRef = useRef(null);

  const renderInputField = (type, options) => {
    switch (type.toLowerCase()) {
      case "date":
        return <input type="date" />;
      case "text":
        return <input type="text" />;
      case "select":
        return (
          <select>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="radioBtn">
            {options.map((option, index) => (
              <label key={index}>
                <input type="radio" name={options.label} value={option} />
                {option}
              </label>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div className="checkboxBtn">
            {options.map((option, index) => (
              <label key={index}>
                <input type="checkbox" value={option} />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="filter">
      <button onClick={() => setOpened((prev) => !prev)}>{buttonName}</button>
      {opened && (
        <div className="dropdown" ref={dropdownRef}>
          {dropdownContent?.map((item, index) => (
            <div key={index} className="dropdown-item">
              <label>{item?.label}</label>
              {renderInputField(item?.type, item?.options)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
