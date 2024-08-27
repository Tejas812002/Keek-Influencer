import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";


const RecentTransactions = ({expanded}) => {

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
    <div className={ ``} >

      <div className={`  h-[524px]  rounded-[14px] bg-[#FFFFFF] ${expanded ? '  w-[798px]':'  w-[1000px]'} `}>

        <div className={`  ml-4   flex justify-between  ${expanded ? '  w-[749px]':'  w-[950px]'} h-[48px]   relative top-4 `}  >
          <div className=' ml-4  h-[48px] w-[445px]'>
            <h2 className='text-[18px] font-semibold font-body text-[#101828]'>Recent Transactions</h2>
            <text className='relative top-[-5px] text-[12px]  font-normal font-body text-[#797A7B]'>Manage your transactions effortlessly—secure, seamless payments with ease!</text>
          </div>
          <div className='flex  mr-[-2px] '>
            <text className='text-[12px] font-medium font-body text-[#0062F5] flex gap-1'>See All Transactions
              <span> <IoIosArrowForward className=" text-[#0062F5] mt-1" /> </span>
            </text>
          </div>
        </div>

        <div class=" ">
          <table class={` ml-5 mt-5 border-b ${expanded ? '  w-[744px]':'  w-[950px]'}`}>
            <thead>
              <tr class="bg-card border-b h-[60px]  text-left">
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B] ">INVOICE NUMBER</th>
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">TRANSACTION NAME</th>
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">BILLING DATE</th>
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">STATUS</th>
                <th class="py-2 px-4 text-[12px] font-semibold font-body text-[#797A7B]">AMOUNT</th>
              </tr>
            </thead>
            <tbody className={`${expanded ? '  w-[744px]':'  w-[950px]'} h-[360px]`}>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b h-[90px]">
                  <td className="py-2 px-4 text-[14px] font-normal font-body">{transaction.id}</td>
                  <td className="py-2 px-4 text-[14px] font-semibold font-body   ">
                    <div className=''>
                      <span className='mt-7'>{transaction.name}</span>
                    </div>
                    {transaction.campaign && (
                      <div>
                        <span className='text-[12px] font-normal font-body text-[#797A7B]'>{transaction.campaign}</span>
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-4 text-[14px] font-normal font-body text-[#191D23]">{transaction.date}</td>
                  <td className="py-2 px-4">
                    <span className={`inline-flex items-center px-2 py-1 text-[10px] font-normal font-body rounded-full gap-1`} 
                    style={{ backgroundColor: transaction.status === 'Pending' ? '#FFEAB0' : '#B0EDC7' }}>
                    <GoDotFill style={{ color: transaction.status === 'Pending' ? '#FACC15' : '#22C55E' }} />
                     {transaction.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 pt-7">
                    <div className='flex gap-1'>
                      <span className="text-[14px] font-semibold font-body">{transaction.amount}</span>
                      {transaction.arrowType === 'down' ? (
                        <FiArrowDownLeft className='text-[#22C55E] text-[22px]' />
                      ) : (
                        <FiArrowUpRight className='text-[#797A7B] text-[22px]' />
                      )}
                    </div>
                    <div>
                      <span className="text-[12px] font-semibold font-body text-[#797A7B]">Balance: {transaction.balance}</span>
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