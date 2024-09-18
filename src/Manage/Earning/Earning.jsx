import React, { useContext, useState, useEffect } from "react";
import { Mycontext } from "../../utils/Context";
import { useLocation } from "react-router-dom";
import { LuFilter } from "react-icons/lu";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import Filter from './Filter';

const Earning = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const campaigns = [
    {
      id: "#12345678",
      name: "Received from Campaign",
      description: "Save Trees and More",
      status: "Completed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Keek balance Withdrawn",
      description: "",
      status: "Completed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Received from Campaign",
      description: "Save Trees and More",
      status: "Failed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Received from Campaign",
      description: "Save Trees and More",
      status: "Pending",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Keek balance Withdrawn",
      description: "",
      status: "Completed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    }
    // Add more campaigns here as needed
  ];


  const handleApplyFilters = (filters) => {
    console.log("Filters Applied:", filters);
  
    // Check if "Paid" or "Deposit" is selected
    if (filters.includes("Paid") || filters.includes("Deposit")) {
      // Remove "Paid" and "Deposit" from the filters and add "Completed"
      const updatedFilters = filters.filter(
        (filter) => filter !== "Paid" && filter !== "Deposit"
      );
      setSelectedFilters([...updatedFilters, "Completed"]);
    } else {
      // Otherwise, just set the selected filters as they are
      setSelectedFilters(filters);
    }
  };

  const filteredCampaigns = selectedFilters.length
    ? campaigns.filter(campaign => selectedFilters.includes(campaign.status))
    : campaigns;

  useEffect(() => {
    // Reset page to 1 when filters change
    setCurrentPage(1);
  }, [selectedFilters]);

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredCampaigns.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredCampaigns.length / recordsPerPage);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      className={`flex relative ${!expanded ? "left-[100px] w-[calc(100%-110px)]" : "left-[320px] w-[calc(100%-320px)]"} overflow-y-auto  space-y-4 `}
    >
   <div className={`bg-[#FFFFFF] ${expanded ? 'w-[1120px]':'w-full'}`}>
        {/* Header and other UI elements */}
  <div className={`flex ${expanded ? 'w-[1062px]':'w-full'} h-[52px]  justify-between items-center ml-8 mt-8 p-[4px] bg-white border-border`}>
          <div className=" w-[753px] ">
            <h1 className="text-2xl w-[100px] h-[28px] font-bold text-foreground">Earnings</h1>
            <p className="text-muted-foreground h-[20] text-sm">
              Manage your transactions effortlessly—secure, seamless payments
              with ease!
            </p>
          </div>



          <div className={`flex   gap-[24px] w-[294px] h-[40px] ${expanded ? "mr-8" : "mr-20"} `}>
          
          <div class="w-[126px] h-[40px] py-[14px] px-[20px]  bg-neutral-100 rounded-lg justify-center items-center gap-3 inline-flex">
              <div class=" relative mt-1 ml-1 text-black ">
                <CiWallet className="w-[21.66px] h-[20px] " />
              </div>
              <div class="text-black w-[46px] h-[22px] text-[16px]  text-base font-semibold font-['Open Sans']">
                $5000
              </div>
            </div>


          <button
            className="bg-[#06F] text-[16px] h-[40px] w-[159px] text-white px-[20px] py-[14px] text-primary-foreground flex items-center hover:bg-primary/80 rounded-lg whitespace-nowrap"
            
          >
          Withdraw Funds
          </button>

          </div>
        </div>

      

              <div class={` ${expanded ? "w-[1037px]" : "w-full"}  h-[45px]   justify-between items-center inline-flex ml-8 mt-6`}>

          <div class="text-[#1f2223] text-base font-semibold font-['Open Sans'] leading-[19px]">
            Transactions :
          </div>
          <div>
          <button
              onClick={toggleModal}
              class={`px-[16px] py-[8px] bg-[#f6f6f6] w-[106px] h-[45px] ${expanded ? "ml-[2vw]" : "mr-[4.5vw] "}    rounded-[10px] justify-center items-center gap-2.5 flex`}
            >
              <div class="w-4 h-4 text-[#797a7b] relative">
                <LuFilter />
              </div>
              <div class="text-[#797a7b] text-base font-semibold font-['Open Sans']">
                Filters
              </div>
            </button>
            {isModalVisible && (
        <div className="absolute top-25 right-10 mt-4 z-50">
          <Filter
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            onApplyFilters={handleApplyFilters} // Make sure this prop matches
          />
        </div>
        
            )}
          </div>
        </div>

        {/* Table and Pagination */}
<span className= {`  ${expanded ? "w-[1052px]" : "w-full"} h-[566px]`}>

        <div className="flex flex-col md:flex-row mt-4 text-start items-start md:items-center justify-between ml-4 ">
          <table className="w-full">
          <thead>
            <tr className="border-b-2 h-[36px] ">
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2 pb-[20px]">
                <div className=' w-[103px] h-[16px]'>
                  INVOICE NUMBER
                  </div>

                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2 pb-[20px]">
                <div className=' w-[122px] h-[16px]'>

TRANSACTION NAME
</div>
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2 pb-[20px]">
                <div className=' w-[80px] h-[16px]'>
                  
                  BILLING DATE
                  </div>
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2 pb-[20px]">
                <div className=' w-[29px] h-[16px]'>
                  Time
                  </div>
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2 pb-[20px]">
                <div className=' w-[44px] h-[16px]'>
                  STATUS
                  </div>
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2 pl-6 pb-[20px]">
                <div className=' w-[54px] h-[16px]'>
                  
                  AMOUNT
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((campaign, index) => (
                <React.Fragment key={index}>
               <tr className="border-b-2 h-[91px]">
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                    <div className="w-[84px] h-[22px] ">

{campaign.id}
</div>
                    </td>
                    <td className=" border-zinc-300 text-[16px] font-normal font-body p-2">
                    <div class="text-[#191d23] w-[193px] h-[22px] text-base font-semibold mt-2">
                          
                        {campaign.name}

                      </div>
                      <div class="h-3 text-[#797a7b] w-[193px] h-[12px] text-[12px]">
                        {campaign.description}
                      </div>
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                    <div className="w-[94px] h-[22px] ">

{campaign.billDate}
</div>
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                    <div className="w-[42px] h-[22px] ">

{campaign.time}
</div>
                    </td>
                    <td className="border-zinc-300 w-[80px] h-[20px] text-[16px] font-semibold p-2">
                    <span
                        className={`font-body   text-[10px]  justify-center items-center flex gap-1 rounded-full text-black ${
                          campaign.status === "Completed"
                          ? "bg-[#B0EDC7] text-green-700 w-[80px] h-[20px] px-[8px] py-[0px]"
                          : campaign.status === "Failed"
                          ? "bg-[#FFBFC3] text-red-700 w-[63px] h-[20px] px-[6px] py-[0px]"
                          : campaign.status === "Pending"
                          ? "bg-[#FFEAB0] text-yellow-700 w-[63px] h-[20px] px-[6px] py-[0px]"
                          : "bg-[#E3EEFF] text-[#0066FF] w-[120px]"
                        }`}
                      >
                        
                        <GoDotFill
                          className={`w-[10px] h-[10px] ${
                            campaign.status === "Completed"
                            ? "text-green-700"
                            : campaign.status === "Failed"
                            ? "text-red-700"
                              : campaign.status === "Pending"
                              ? "text-yellow-700"
                              : "text-[#0066FF]"
                          }`}
                          />
                        {campaign.status}
                      </span>
                    </td>


                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                    <div className="w-[92px] h-[42px]">
                     
                      <div className="flex w-[92px] h-[22px] text-[#191d23] text-base font-semibold mt-2">
                        {campaign.amount}
                        {campaign.name === "Received from Campaign" ? (
                        <GoArrowDownLeft className="w-[22px] h-[22px] text-[#52C41A] relative ml-1" />
                      ) : (
                        <GoArrowUpRight className="w-[22px] h-[22px] text-[#797a7b] relative ml-1" />
                      )}
                      </div>

                      <div class="text-[#797a7b] text-xs ">
                        Balance: {campaign.totalAmount}
                      </div>
                      </div>

                    </td>

                    <td className="border-zinc-300 p-2">
                      <button
                        className="text-[#0066FF] w-[84px] h-[12px] flex items-center font-body text-[14px] font-normal cursor-pointer"
                        onClick={() => toggleDetails(index)}
                      >
                        View Invoice
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        </span>

   
        <nav className=" flex left-[83%] relative w-[130px] h-[20px]   text-[14px] mt-6 items-center   p-4">
          <ul className="pagination flex ">
            <li className="page-item">
              <button
                onClick={prePage}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
              >
                <span>
                  <IoIosArrowBack className="text-[#797A7B]" />
                </span>
              </button>
            </li>
            <span className="mt-1   flex flex-row">
              {currentPage} of {npage}
            </span>

            <li className="page-item">
              <button
                onClick={nextPage}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
              >
                <span>
                  <IoIosArrowForward  />
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Earning;
