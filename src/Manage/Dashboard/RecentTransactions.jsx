import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";


const RecentTransactions = ({ expanded }) => {

  const transactions = [
    {
      id: '#12345678',
      name: 'Received from Campaign',
      campaign: 'Save tree and more',
      date: 'July 21, 2024',
      status: 'Completed',
      amount: '$1200',
      balance: '$10000',
      arrowType: 'down',
      statusBg: '#B0EDC7',

    },
    {
      id: '#12345678',
      name: 'Keek balance withdrawn',
      date: 'July 21, 2024',
      status: 'Completed',
      amount: '$1200',
      balance: '$10000',
      arrowType: 'up',
      statusBg: '#B0EDC7',

    },
    {
      id: '#12345678',
      name: 'Received from Campaign',
      campaign: 'Save tree and more',
      date: 'July 21, 2024',
      status: 'Completed',
      amount: '$1200',
      balance: '$10000',
      arrowType: 'down',
      statusBg: '#B0EDC7',

    },
    {
      id: '#12345678',
      name: 'Received from Campaign',
      campaign: 'Save tree and more',
      date: 'July 21, 2024',
      status: 'Pending',
      amount: '$1200',
      balance: '$10000',
      arrowType: 'down',
      statusBg: '#FFEAB0',

    },

    // Add more transactions here if needed
  ];


  return (
    <div className={``} >

      <div className={`  h-[524px]  rounded-[14px] bg-[#FFFFFF] ${expanded ? '  w-[798px]' : '  w-[1000px]'} `}>

        <div className={`  ml-4   flex justify-between  ${expanded ? '  w-[749px]' : '  w-[950px]'} h-[48px]   relative top-4 `}  >
          <div className=' ml-4  h-[48px] w-[445px]'>

            <div className='w-[176px] '>
              <h2 className='text-[18px]  h-[28px]  font-semibold font-body text-[#101828]'>Recent Transactions</h2>
            </div>
            <div className='w-[445px] h-[20px]'>
              <text className=' relative    text-[12px]  font-normal font-body text-[#797A7B]'>Manage your transactions effortlessly—secure, seamless payments with ease!</text>
            </div>
          </div>
          <div className='flex  w-[132px] h-[21px]  '>
            <text className='text-[12px]  h-[21px] font-medium font-body text-[#0062F5] flex '>See All Transactions
            </text>
              <span> <IoIosArrowForward className=" text-[#0062F5] w-[14px] h-[14px] mt-1" /> </span>
          </div>
        </div>

        <div class=" ">
          <table class={` ml-5 mt-7 border-b ${expanded ? '  w-[744px]' : '  w-[950px]'}`}>
            <thead>
              <tr class="bg-card border-b h-[60px]  text-left">
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B] ">
                <div className=' w-[103px] h-[16px]'>
                  INVOICE NUMBER
                  </div>
                  
                  </th>
                <th class=" py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">
                  <div className=' w-[122px] h-[16px]'>

                  TRANSACTION NAME
                  </div>
                  
                  </th>

                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">
                <div className=' w-[80px] h-[16px]'>
                  
                  BILLING DATE
                  </div>
                  
                  </th>
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">
                <div className=' w-[44px] h-[16px]'>
                  STATUS
                  </div>
                  
                  </th>
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">
                <div className=' w-[54px] h-[16px]'>
                  
                  AMOUNT
                  </div>
                  </th>
              </tr>
            </thead>
            <tbody className={`${expanded ? '  w-[744px]' : '  w-[950px]'} h-[360px]`}>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b h-[90px]">
                  <td className="py-2 px-4 w-[74px] h-[19px] text-[14px] font-normal font-body">
                    <div className=" w-[74px] h-[19px] ">
                    {transaction.id}

                    </div>
                    
                    </td>
                  <td className=" px-4 h-[35px] gap-[4px] font-semibold font-body   ">
                    <div className='  text-[14px] '>
                      <span className='mt-7'>
                        <div className="w-[169px] h-[19px] ">

                        {transaction.name}
                        </div>
                        </span>
                    </div>
                    {transaction.campaign && (
                        <span className='text-[12px]  font-normal font-body text-[#797A7B]'>
                          
                        <div className=" w-[169px] h-[12px]">
                          {transaction.campaign}

                    </div>
                          </span>
                    )}
                  
                  </td>
                  <td className=" text-[14px] w-[94px] h-[22px] font-normal font-body text-[#191D23]">{transaction.date}</td>
                  <td className="py-2 px-4">
                    <span className={`inline-flex items-center w-[80px] h-[20px] px-[8px] py-[0px]  text-[10px] font-normal font-body rounded-full gap-1`}
                      style={{ backgroundColor: transaction.status === 'Pending' ? '#FFEAB0  ' : '#B0EDC7' }}>
                      <GoDotFill style={{ color: transaction.status === 'Pending' ? '#FACC15 ' : '#22C55E' }} />

                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-2 px-2 pt-7 ">
                    <div className='w-[94px] h-[42px]'>
                      <div className=' flex gap-1 w-[92px] h-[22px]  '>
                        <span className="text-[14px] w-[41px] h-[19px] font-semibold font-body">
                          
                          {transaction.amount}
                          </span>
                        {transaction.arrowType === 'down' ? (
                          <FiArrowDownLeft className='text-[#22C55E] text-[22px]' />
                        ) : (
                          <FiArrowUpRight className='text-[#797A7B] text-[22px]' />
                        )}
                      </div>
                      <div>
                        <span className="text-[12px] w-[92px] h-[16px] font-semibold font-body text-[#797A7B]">Balance: {transaction.balance}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div >
  )
}

export default RecentTransactions