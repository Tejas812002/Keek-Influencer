import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const FilterData = ({ isFilter, setIsFilter }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // Manages which dropdown is open
  const [selectedFilters, setSelectedFilters] = useState({
    platforms: [],
    locations: [],
    startDate: '',
    endDate: ''
  });

  const [appliedFilters, setAppliedFilters] = useState({
    platforms: [],
    locations: [],
    startDate: '',
    endDate: ''
  });

  const platformOptions = ['Instagram', 'Facebook', 'Snapchat', 'Twitter', 'LinkedIn'];
  const locationOptions = ['Mumbai, India', 'Delhi, India', 'Pune, India', 'Nagpur, India'];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelectItem = (item, type) => {
    if (!selectedFilters[type].includes(item)) {
      setSelectedFilters((prevState) => ({
        ...prevState,
        [type]: [...prevState[type], item]
      }));
    }
    setOpenDropdown(null); // Close dropdown after selection
  };

  const handleDateChange = (e, dateType) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [dateType]: e.target.value
    }));
  };

  const handleRemoveItem = (item, type) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [type]: prevState[type].filter((selected) => selected !== item)
    }));
  };

  const handleApplyFilters = () => {
    // Save the selected filters into appliedFilters state
    setAppliedFilters(selectedFilters);
    // Implement further logic here to filter data or make API calls based on applied filters
    console.log('Filters Applied:', appliedFilters);
    // Close the dropdown after applying filters
    setOpenDropdown(null);
    setIsFilter(false);
  };

  const handleClosefilter = () => {
    setIsFilter(!isFilter);
  };

  return (
    <>
      {isFilter && (
        <div className='fixed inset-0 mt-[14%]  mr-[2%] flex justify-end items-start z-50'>
          <div className='w-[323px] h-[446px] p-4 border-2 rounded-md bg-white shadow-md'>
            <div className='border-b-2 w-[289px] h-[24px]'>
              <div className='w-[289px] flex items-center justify-between h-[16px]'>
                <h1 className='ml-[120px] text-[12px] font-normal font-body text-[#344054]'>Filters</h1>
                <button onClick={handleClosefilter} className='float-end text-2xl'>&times;</button>
              </div>
            </div>

            {/* Date Selection */}
            <div className='w-[272px] h-[72px] my-5'>
              <div className='w-[272px] h-[16px] font-semibold text-[12px] text-[#57595A] font-body'>Date</div>
              <div className='w-[272px] h-[50px] mt-1'>
                <div className='flex justify-between'>
                  <div className='w-[124px] h-[50px]'>
                    <h1 className='text-[10px] font-normal font-body'>Start Date</h1>
                    <div className='w-[124px] h-[30px] rounded-[8px] border-[#B1B2B2] border-2'>
                      <input
                        type='date'
                        value={selectedFilters.startDate}
                        onChange={(e) => handleDateChange(e, 'startDate')}
                        className='w-[120px] h-[16px] text-[12px] text-[#B1B2B2] font-normal font-body'
                      />
                    </div>
                  </div>
                  <div className='w-[124px] h-[50px]'>
                    <h1 className='text-[10px] font-normal font-body'>End Date</h1>
                    <div className='w-[124px] h-[30px] rounded-[8px] border-[#B1B2B2] border-2'>
                      <input
                        type='date'
                        value={selectedFilters.endDate}
                        onChange={(e) => handleDateChange(e, 'endDate')}
                        className='w-[120px] h-[16px] text-[12px] font-normal text-[#B1B2B2] font-body'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Dropdown */}
            <div className='w-[272px] h-[84px] my-5'>
              <div className='w-[272px] h-[16px] font-semibold text-[12px] text-[#57595A] font-body'>Platform</div>
              <div
                className='mt-1 border-2 border-[#B1B2B2] w-[272px] px-3 rounded-[8px] h-[30px] flex justify-between items-center relative cursor-pointer'
                onClick={() => toggleDropdown('platforms')}
              >
                <div>
                  <button className='text-[12px] text-[#7c7c7c]'>Select Platform</button>
                </div>
                <div>
                  <MdKeyboardArrowDown className='text-[#A3A3a3] text-xl' />
                </div>
              </div>

              {openDropdown === 'platforms' && (
                <ul className='absolute w-[272px] px-3 bg-white border-2 border-[#B1B2B2] z-10'>
                  {platformOptions.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectItem(option, 'platforms')}
                      className='text-black text-[12px] p-1 font-normal font-body cursor-pointer'
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              {/* Display selected platforms */}
              <div className='flex flex-wrap space-x-2 mt-2'>
                {selectedFilters.platforms.map((item, index) => (
                  <div
                    key={index}
                    className='flex w-[81.01px] h-[26px] items-center bg-[#0062F5] text-white px-[10px] py-[6px] rounded-[50px] mb-2'
                  >
                    <span className='text-[10px] font-body font-normal'>{item}</span>
                    <button
                      onClick={() => handleRemoveItem(item, 'platforms')}
                      className='ml-2 text-white focus:outline-none'
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Dropdown */}
            <div className='w-[272px] h-[84px] my-5'>
              <div className='w-[272px] h-[16px] font-semibold text-[12px] text-[#57595A] font-body'>Location</div>
              <div
                className='mt-1 border-2 border-[#B1B2B2] px-3 rounded-[8px] w-[272px] h-[30px] flex justify-between items-center relative cursor-pointer'
                onClick={() => toggleDropdown('locations')}
              >
                <div>
                  <button className='text-[12px] text-[#7c7c7c]'>Select Location</button>
                </div>
                <div>
                  <MdKeyboardArrowDown className='text-[#A3A3a3] text-xl' />
                </div>
              </div>

              {openDropdown === 'locations' && (
                <ul className='absolute w-[272px] px-3 bg-white border-2 border-[#B1B2B2] z-10'>
                  {locationOptions.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectItem(option, 'locations')}
                      className='text-black text-[12px] p-1 font-normal font-body cursor-pointer'
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              {/* Display selected locations */}
              <div className='flex flex-wrap space-x-2 mt-2'>
                {selectedFilters.locations.map((item, index) => (
                  <div
                    key={index}
                    className='flex w-[109.01px] h-[26px] items-center bg-[#0062F5] text-white px-[10px] py-[6px] rounded-[50px] mb-2'
                  >
                    <span className='text-[10px] font-body font-normal'>{item}</span>
                    <button
                      onClick={() => handleRemoveItem(item, 'locations')}
                      className='ml-2 text-white focus:outline-none'
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className='w-[289px] h-[30px] flex gap-6 mt-14'>
              <button onClick={handleClosefilter} className='w-[131.5px] h-[30px] rounded-[4px] border-[#0062F5] border-2 px-[16px] text-[#0062F5] text-[14px] font-normal font-body'>
                Cancel
              </button>
              <button
                onClick={handleApplyFilters}
                className='w-[131.5px] h-[30px] rounded-[4px] text-[#ffffff] border-[#0062F5] border-2 px-[16px] bg-[#0062F5] text-[14px] font-normal font-body'
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterData;
