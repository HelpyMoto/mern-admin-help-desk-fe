import React, { useState } from "react";

const Dropdown = ({ options, activeOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block">
      <div>
        <button
          className="inline-flex justify-center w-full rounded-md shadow-sm px-5 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          id="dropdown-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {activeOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen ? "" : "hidden"
        }`}
        aria-labelledby="dropdown-menu"
        role="menu"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <a
              key={option}
              href="#"
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                option === activeOption ? "bg-gray-100 text-gray-900" : ""
              }`}
              role="menuitem"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const TicketFilter = ({ onChange }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onChange(filter);
  };

  const filterOptions = ["All", "Open", "Closed", "Answered"];

  return (
    <div className="flex space-x-2">
      <span className="inline-flex rounded-md shadow-sm">
        <Dropdown
          options={filterOptions}
          activeOption={activeFilter}
          onSelect={handleFilterChange}
        />
      </span>
    </div>
  );
};

export default TicketFilter;
