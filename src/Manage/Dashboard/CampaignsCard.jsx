import React from 'react'

const CampaignsCard = ({expanded}) => {

    const cardData = [
        {
          title: 'Available Balance',
          value: '$5000',
        },
        {
          title: 'Total Campaigns',
          value: '120',
        },
      ];
      
    return (
        <div className={``}>

<div className='space-y-6'>
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`h-[140px] bg-[#E2EDFF] rounded-[14px] px-9 py-5 ${expanded ? 'w-[280px]' : 'w-[320px]'} `}
          >
            <div className='w-[186px] h-[78px]  mt-2 '>
              <div className='w-[186px] h-[40px]'>
                <h2 className='text-[20px] font-semibold font-body'>{item.title} :</h2>
              </div>
              <div className='w-[186px] h-[28px] mt-3'>
                <text className='text-[28px] font-semibold font-body text-[#0066FF]'>{item.value}</text>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    )
}

export default CampaignsCard