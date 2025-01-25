// src/components/Dropdown.js
import React, { useState } from 'react';

const CategoryDropdown = ({ title, items, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="pb-3">
      <a
        className={`collapsed d-flex justify-content-between h3 text-decoration-none ${isOpen ? 'show' : ''}`}
        href="#"
        onClick={handleToggle}
      >
        {title}
        <i className={`fa fa-fw ${isOpen ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'} mt-1`}></i>
      </a>
      <ul id={id} className={`collapse ${isOpen ? 'show' : ''} list-unstyled pl-3`}>
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-decoration-none" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryDropdown;
