import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Profile from "./Profile";

import { IoIosArrowForward } from "react-icons/io";

const RecentCampaigns = ({ expanded }) => {

  const campaigns = [
    { title: 'Save tree and more', company: 'Crocs', status: 'Applied', statusColor: '#FACC15' },
    { title: 'Save tree and more', company: 'Crocs', status: 'Applied', statusColor: '#FACC15' },
    { title: 'Save tree and more', company: 'Crocs', status: 'Applied', statusColor: '#FACC15' },
    { title: 'Save tree and more', company: 'Crocs', status: 'Ongoing', statusColor: '#22C55E' },
  ];


  const [isOpen, setIsOpen] = useState(false); // State to handle popup visibility
  const [selectData, setSelectData] = useState({}); // State to handle selected data

    // Function to handle the click event and open the popup
    const handleOpenProfile = (campaign) => {
        setSelectData(campaign); // Set the selected data
        setIsOpen(true); // Open the popup
      };
    

  return (
    <div>

      <div className={` h-[524px] bg-[#FFFFFF] rounded-[14px] p-4 ${expanded ? '  w-[280px]' : '  w-[320px]'}`}>
        <div className=' w-[177px] h-[48px] '>
          <div className='w-[161px] '>
            <h2 className='text-[18px] font-semibold font-body h-[28px] ' >Recent Campaigns</h2>
          </div>
          <div className='w-[175px] '>
            <h2 className='text-[12px] h-[20px] font-normal font-body text-[#797A7B]' >Some of the recent campaigns.</h2>
          </div>
        </div>

        <div className={`${expanded ? 'w-[245px]' : 'w-[280px]'}  h-[364px] mt-7`}>
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className={`${expanded ? 'w-[245px]' : 'w-[280px]'} h-[91px] border-t py-[26px] border-b flex items-center justify-between`}
            >
              <div className='w-[132px] h-[39px]'>
                <h2 className='text-[14px] font-semibold font-body'>{campaign.title}</h2>
                <div className='flex items-center'>


                <button
        className="text-[12px] font-normal font-body text-[#797A7B]"
        onClick={() => handleOpenProfile(campaign)}
      >
        {campaign.company}
      </button>

      {/* Profile popup component */}
      <Profile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectData={selectData}
      />


                  <FiArrowUpRight className='text-[#0066FF] ml-1' />
                </div>
              </div>
              <div className=''>
                <span
                  className={`items-center flex  px-[8px] py-[4px] gap-1 rounded-[14px] text-[12px] font-normal font-body text-[#000000] ${campaign.status === 'Ongoing' ? 'bg-[#B0EDC7] w-[76px] ' : 'bg-[#FFEAB0] w-[71px] '}`}
                >
                  <GoDotFill style={{ color: campaign.status === 'Ongoing' ? '#22C55E' : '#FACC15' }} />

                  {campaign.status}
                  
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='w-[126px] h-[21px] mt-5 flex items-center'>
          <text className='text-[12px] w-[126px] h-[28px] font-medium font-body text-[#0062F5] flex items-center cursor-pointer gap-[5px]'>See All Campaigns <span><IoIosArrowForward /></span></text>
        </div>

      </div>
    </div>
  )
}

export default RecentCampaigns;