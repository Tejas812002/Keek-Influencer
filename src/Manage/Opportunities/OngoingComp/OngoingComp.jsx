import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import OngoingPop from "./OngoingPop";
import { GoDotFill } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import Brand from "../../../Assets/logo.png";
import OngingProfile from "./OngoingProfile";

const OngoingComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectIndax, setSelectIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const invoiceData = [
    {
      img: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook", "Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$5000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location: ["New Delhi, Mumbai "],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      postCount: 1,
      reelCount: 2,
      storyCount: 3,
      addInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },

    {
      img: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook", "Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location: ["New Delhi, Mumbai "],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      postCount: 0,
      reelCount: 2,
      storyCount: 1,
      addInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook", "Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location: ["New Delhi, Mumbai "],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      postCount: 0,
      reelCount: 2,
      storyCount: 1,
      addInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook", "Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location: ["New Delhi, Mumbai "],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      postCount: 0,
      reelCount: 2,
      storyCount: 1,
      addInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      platform: ["Instagram", "facebook", "Youtube"],
      appliedDate: "10 July 2024",
      status: "Ongoing",
      balance: "$10000",
      statusColor: "bg-green-200 text-green-800", // For completed status
      location: ["New Delhi, Mumbai "],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      postCount: 0,
      reelCount: 2,
      storyCount: 1,
      addInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
  ];

  const handlCrocks = (index) => {
    setIsOpen(true);
    setSelectIndex(index);
  };

  const handleview = (index) => {
    setIsModalVisible(true);
    setSelectIndex(index);
  };

  return (
    <div
      class={` flex relative h-[897px]   ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-white  w-full">
        <div
          className={`flex ${
            expanded ? "w-[1062px]" : "w-full"
          } h-[52px] justify-between items-center p-4 bg-white border-border`}
        >
          <div className={` w-[666px] h-[52px]`}>
            <h1 className="text-[24px] h-[28px] w-[163px] font-semibold font-body">
              Opportunities
            </h1>
            <p className="h-[20px] w-[666px]  text-[14px] font-normal font-body text-[#57595a]">
              Discover various brand campaigns —connect, collaborate, and
              elevate your influence to the next level!
            </p>
          </div>
        </div>

        <div className={`flex mt-11 px-4 border-b `}>
          <div className={`flex gap-6  ${expanded ? "w-[780px]" : "w-full"}`}>
            <Link to="/Opportunities">
              <div
                className={`px-[6px] text-[16px] font-body w-[160px] h-[22px] ${
                  location.pathname === "/Opportunities"
                    ? "text-[#191D23] font-semibold border-b-2 border-[#0066FF]"
                    : "text-[#57595A] font-normal"
                }`}
              >
                New Opportunities
              </div>
            </Link>
            <Link to="/Applied">
              <div
                className={`text-[16px] font-body w-[177px] h-[22px] ${
                  location.pathname === "/Applied"
                    ? "text-primary border-b-2 border-[#0066FF] font-semibold"
                    : "text-[#57595A] font-normal"
                }`}
              >
                Applied Opportunities
              </div>
            </Link>
            <Link to="/Ongoing">
              <div
                className={`text-[16px] font-body w-[184px] h-[22px] ${
                  location.pathname === "/Ongoing"
                    ? "text-primary border-b-2 border-[#0066FF] font-semibold"
                    : "text-[#57595A] font-normal"
                }`}
              >
                Ongoing Opportunities
              </div>
            </Link>
            <Link to="/Complete">
              <div
                className={`text-[16px] font-body w-[202px] h-[22px] ${
                  location.pathname === "/Complete"
                    ? "text-primary border-b-2 border-[#0066FF] font-semibold"
                    : "text-[#57595A] font-normal"
                }`}
              >
                Completed Opportunities
              </div>
            </Link>
          </div>
        </div>

        {/* table componenet start--- */}
        <div className=" px-4  ">
          <table className={` ${expanded ? "w-[1051px] " : "w-full"}  mt-11`}>
            <thead className="h-[20px] w-[736px]  border-b-2 ">
              <tr className="  h-[20px]  ">
                <th className="   font-body text-[#797A7B] text-[12px] px-3  font-semibold text-start ">
                  <div className="w-[80px] h-[16px] ">BRAND NAME</div>
                </th>
                <th className="   font-body text-[#797A7B] text-[12px]  px-3 font-semibold text-start ">
                  <div className="w-[102px] h-[16px]"> CAMPAIGN NAME</div>
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] px-3  font-semibold text-start ">
                  <div className="w-[70px] h-[20px]">PLATFORM</div>
                </th>
                <th className=" font-body text-[#797A7B] text-[12px]  px-3 font-semibold text-start ">
                  <div className="w-[97px] h-[20px]"> APPLIED DATE</div>
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] px-3   font-semibold text-start">
                  <div className="w-[47px] h-[20px]"> STATUS</div>
                </th>
              </tr>
            </thead>

            <tbody className="w-[1051px] ">
              {invoiceData.map((invoice, index) => (
                <tr
                  key={index}
                  className="border-b  items-center h-[99px] w-[767px] "
                >
                  <td
                    onClick={() => handlCrocks(index)}
                    className="  cursor-pointer  p-3 text-[16px]    font-normal font-body flex items-center "
                  >
                    <div className="w-[70px] h-[22px] flex items-center">
                    {invoice.brandName}
                    <span className="text-[#0066FF] text-lg gap-1">
                      <FiArrowUpRight />
                    </span>
                    </div>
                  </td>

                  <td className="  p-3 text-[16px]  font-normal font-body  ">
                   <div className="w-[162px] h-[22px]"> {invoice.campaignName}</div>
                  </td>

                  <td className=" text-[16px] p-3    font-normal font-body">
                    <div className="w-[103px] h-[22px]">
                      {invoice.platform.length > 1
                      ? `${invoice.platform[0]} +${invoice.platform.length - 1}`
                      : invoice.platform[0]}
                      </div>
                  </td>

                  <td className="  p-3 text-[16px]     font-normal font-body">
                   <div className="w-[106px] h-[22px]"> {invoice.appliedDate}</div>
                  </td>

                  <td className="    text-[14px] font-normal p-4       ">
                   <div className="w-[84px] h-[22px]">
                   <p
                      className={`font-body bg-[#B0EDC7] w-[84px] h-[24px] font-normal text-[14px] justify-center items-center flex  px-[8px] py-[2px]   rounded-[14px] text-black `}
                    >
                      <span>
                        <GoDotFill className="  text-[#22C55E]  mr-[2px] " />{" "}
                      </span>
                      {invoice.status}
                    </p>
                   </div>
                  </td>

                  <td className="  flex items-center justify-center  mt-8  gap-1  ">
                    <button
                      onClick={() => handleview(index)}
                      className="text-[#0066FF]  mr-4 px-[16px] w-[120px] h-[35px] rounded-[8px] border-2 border-[#0066FF] font-body text-[14px]    font-normal"
                    >
                      View Details
                    </button>

                    <button className="bg-[#0066FF] text-[#FFFFFF] rounded-[8px] font-body text-[14px]   px-[16px] w-[120px] h-[35px] font-normal">
                      Submit proof
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <OngingProfile
        selectData={invoiceData[selectIndax]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <OngoingPop
        selectData={invoiceData[selectIndax]}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default OngoingComp;
