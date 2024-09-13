import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Brand from "../../../Assets/Brand.png";
import DataComp from "./Data";
import CompleteProfileComp from "./CompleteProfile";

const CompletedComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const campaigns = [
    {
      id: "C123456",
      logo: Brand,
      campbrand: "Crocks",
      title: "Save Trees and More",
      name: "Brand Name",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      socials: ["Instagram", "Snapchat"],
      location: "New Delhi, Mumbai",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      reelCount: 2,
      storyCount: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      earnings: "$3000",
      status: "Completed",
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      id: "C123456",
      campbrand: "Crocks",
      logo: Brand,
      title: "Save Trees and More",
      name: "Brand Name",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      socials: ["instagram", "facebook", "youtube"],
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      earnings: "$3000",
      status: "Completed",
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      id: "C123456",
      campbrand: "Crocks",
      logo: Brand,
      title: "Save Trees and More",
      name: "Brand Name",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      socials: ["instagram", "facebook", "youtube"],
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      earnings: "$3000",
      status: "Completed",
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      id: "C123456",
      campbrand: "Crocks",
      logo: Brand,
      title: "Save Trees and More",
      name: "Brand Name",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      socials: ["instagram", "facebook", "youtube"],
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      earnings: "$3000",
      status: "Completed",
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      id: "C123456",
      campbrand: "Crocks",
      logo: Brand,
      title: "Save Trees and More",
      name: "Brand Name",
      platforms: "Instagram +2",
      duration: "10 July - 15 July 2024",
      socials: ["instagram", "facebook", "youtube"],
      location: "New Delhi, Mumbai, Chennai",
      startDate: "1 july 2024",
      endDate: "10 july 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      earnings: "$3000",
      status: "Completed",
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
  ];

  const handleView = (index) => {
    setIsModalVisible(true);
    setSelectIndex(index);
  };

  const handleBrand = (index) => {
    setIsOpen(true);
    setSelectIndex(index);
  };

  return (
    <div
      class={` flex relative h-[897px]  ${
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

        {/* table content--- */}
        <div className=" px-4">
          <table className={`${expanded ? "w-[1047px]" : "w-full"} mt-11`}>
            <thead className="h-[40px]">
              <tr className="border-b">
                <th className="text-[#797A7B] font-semibold text-[12px] px-3 text-start">
                  <div className="w-[80px] h-[16px]"> CAMPAIGN ID </div>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] px-3 text-start">
                  <div className="w-[102px] h-[16px]"> CAMPAIGN NAME </div>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] px-3 text-start">
                  <div className="w-[70px] h-[20px]"> PLATFORMS </div>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] px-3 text-start">
                  <div className="w-[97px] h-[20px]"> DURATION </div>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] px-3 text-start">
                  <div className="w-[97px] h-[20px]"> EARNINGS </div>
                </th>
                <th className="text-[#797A7B] font-semibold text-[12px] px-3 text-start">
                  <div className="w-[47px] h-[20px]"> STATUS </div>
                </th>
              </tr>{" "}
            </thead>
            <tbody className="mt-2">
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-b h-[108px]">
                  <td className="p-2 py-8">
                    <div className="w-[67px] h-[22px]">{campaign.id}</div>
                  </td>
                  <td>
                    <div className="py-8">
                      <div className="font-normal text-base text-[#191D23] w-[162px] h-[22px]">
                        {" "}
                        {campaign.title}
                      </div>
                      <div
                        onClick={() => handleBrand(index)}
                        className="flex items-center gap-[1px] cursor-pointer"
                      >
                        <h6 className="text-[#797A7B] font-sans text-xs not-italic font-normal leading-normal w-[38px] h-[16px]">
                          {campaign.campbrand}
                        </h6>
                        <button>
                          <FiArrowUpRight className="text-[#0066FF]" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="font-normal text-base text-[#191D23] px-3 py-8">
                    <div className="w-[103px] h-[22px]">
                      {" "}
                      {campaign.platforms}{" "}
                    </div>
                  </td>
                  <td className="font-normal text-base text-[#191D23] px-3 py-8">
                    <div className="w-[157px] h-[22px]">
                      {" "}
                      {campaign.duration}{" "}
                    </div>
                  </td>
                  <td className="font-normal text-base text-[#191D23] px-3 py-8">
                    <div className="w-[52px] h-[22px]">
                      {" "}
                      {campaign.earnings}{" "}
                    </div>
                  </td>
                  <td className="px-3 py-8">
                    <div className="flex w-[100px] h-[24px] py-[2px] px-2 justify-center items-center  rounded-[14px] bg-[#D1E3FF]">
                      <GoDotFill className="text-2xl text-[#0062F5]" />
                      <span className="text-[#000] font-sans text-sm not-italic font-normal ">
                        {campaign.status}
                      </span>
                    </div>
                  </td>
                  <td className=" flex gap-2 px-3 py-8">
                    <button
                      className="text-[#06F] text-center font-sans text-sm not-italic font-normal leading-[100%] w-[79px]"
                      onClick={() => handleView(index)}
                    >
                      View Details
                    </button>
                    <button
                        className="w-[103px] h-[35px] px-[16px] rounded-[8px]  text-white  border-[#0066FF] font-normal text-[14px] bg-[#0066FF]"
                       
                      >
                        View Proof
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CompleteProfileComp
            selectData={campaigns[selectIndex]}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
          <DataComp
            selectData={campaigns[selectIndex]}
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default CompletedComp;
