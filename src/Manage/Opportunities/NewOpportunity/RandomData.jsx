import React, { useState } from 'react';

const MultiSelectDropdown = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Instagram', 'Facebook', 'Snapchat', 'Twitter', 'LinkedIn'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (option) => {
    if (!selectedItems.includes(option)) {
      setSelectedItems([...selectedItems, option]);
    }
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
  };

  return (
    <div className="w-64">
      <div className="relative">
        {/* Dropdown button */}
        <button
          onClick={toggleDropdown}
          className="w-full bg-black text-white px-4 py-2 rounded-md border border-gray-400"
        >
          Select Platform
          <span className="ml-2">&#9662;</span>
        </button>

        {/* Dropdown options */}
        {isDropdownOpen && (
          <ul className="absolute w-full bg-white border border-gray-400 rounded-md mt-1 z-10">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display selected items */}
      <div className="flex flex-wrap space-x-2 mt-4">
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full mb-2"
          >
            <span>{item}</span>
            <button
              onClick={() => handleRemove(item)}
              className="ml-2 text-white focus:outline-none"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
