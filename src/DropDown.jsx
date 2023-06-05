import PropTypes from 'prop-types';
import  { useState , useEffect, useRef} from 'react';

const DropdownMenu = ({setFilter}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Confirmed');


  

  const options = ['Confirmed', 'Delivered', 'Refund Complated (30d)', 'Pending'];


  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFilter(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div className='flex items-center justify-center gap-3'>
      <div
        className="bg-[#EFF0F6] min-h- w-40 select-none text-[#4F5E74] text-xs p-2 rounded-lg flex  items-center justify-between gap-2 cursor-pointer"
        onClick={handleToggle}
      >
        ACTIVE ORDERS
        <img src="/Chevron-down.png" alt="icon" width={10} className={`${isOpen ? "origin-center rotate-180": " origin-center rotate-0"}`}/>
      </div>
      <img src="/group-arrows.png" alt="icons" width={6} />
      </div>
      {isOpen && (
        <div className="absolute mt-2 bg-white right-0  min-w-max w-full shadow-md rounded-md">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 font-normal flex items-center gap-2 text-sm   w-full justify-start cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              <span className="mr-2 w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                {selectedOption === option ? (
                  <span className="bg-blue-500 w-2 h-2 rounded-full"></span>
                ) : null}
              </span>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;


DropdownMenu.propTypes = {
  setFilter: PropTypes.func.isRequired,
};