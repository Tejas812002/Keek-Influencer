import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import Brand from "../../../Assets/logo.png";
import { FiArrowUpRight } from "react-icons/fi";
import AppCompModal from "./AppCompModal";
import AppiledProfileComp from "./Appliedprofile";

const AppliedComp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const AppliedCompData = [
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      name: "Brand Name",
      platforms: "instagram+2",
      location: ["New Delhi", "Mumbai"],
      startDate: "1 July 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["Instagram", "Snapchat"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 0,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },

    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      name: "Brand Name",
      platforms: "instagram+2",
      location: ["New Delhi", "Mumbai"],
      startDate: "1 July 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["Instagram", "Snapchat"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 0,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      name: "Brand Name",
      platforms: "instagram+2",
      location: ["New Delhi", "Mumbai"],
      startDate: "1 July 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["Instagram", "Snapchat"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 0,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      name: "Brand Name",
      platforms: "instagram+2",
      location: ["New Delhi", "Mumbai"],
      startDate: "1 July 2024",
      AppliedDate: "10 July 2024",
      status: "Withdrawn",
      socials: ["Instagram", "Snapchat"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 0,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      brandName: "Crocks",
      campaignName: "Save Trees and More",
      name: "Brand Name",
      platforms: "instagram+2",
      location: ["New Delhi", "Mumbai"],
      startDate: "1 July 2024",
      AppliedDate: "10 July 2024",
      status: "Applied",
      socials: ["Instagram", "Snapchat"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount: 0,
      reelCount: 2,
      storyCount: 3,
      payment: 5000,
      addInfo:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
  ];
  const handleViewDetails = (index) => {
    setSelectIndex(index);
    setOpenModal(true);
  };

  const handleBrand = (index) => {
    setIsOpen(true);
    setSelectIndex(index);
  };

  return (
    <div
      className={` flex relative h-[897px] ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-[#FFFFFF] w-full">
        <div
          className={`flex ${
            expanded ? "w-[1062px]" : "w-full"
          } h-[52px] justify-between items-center p-4 bg-white border-border`}
        >
          <div className={`w-[666px] h-[52px]`}>
            <h1 className="text-[24px] h-[28px] w-[163px] font-semibold font-body">
              Opportunities
            </h1>
            <p className="h-[20px] w-[666px] text-[14px] font-normal font-body text-[#57595a]">
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

        {/* table content- */}
        <div className=" px-4">
          <table className={`${expanded ? "w-[1047px]" : "w-full"} mt-11`}>
            <thead className="h-[20px] w-[736px] ">
              <tr>
                <th className="text-[#797A7B] font-semibold px-3  text-[12px] text-start">
                <div className="w-[80px] h-[16px]">  BRAND NAME</div>
                </th>
                <th className="text-[#797A7B] font-semibold px-3  text-[12px] text-start ">
                 <div className="w-[102px] h-[16px]"> CAMPAIGN NAME</div>
                </th>
                <th className="text-[#797A7B] font-semibold px-3  text-[12px] text-start ">
                  <div className="w-[70px] h-[20px]">PLATFORMS</div>
                </th>
                <th className="text-[#797A7B] font-semibold px-3  text-[12px] text-start ">
                  <div className="w-[97px] h-[20px]">APPLIED DATE</div>
                </th>
                <th className="text-[#797A7B] font-semibold px-3  text-[12px] text-start ">
                  <div className="w-[47px] h-[20px]">STATUS</div>
                </th>
              </tr>{" "}
            </thead>
            <tbody className="mt-2">
              {AppliedCompData.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="border-y border-[#D2D3D3] h-[99px] py-[32px]"
                  >
                    <td>
                     <div className="" >
                     <button onClick={() => handleBrand(index)} className="">
                        <div className="flex w-[70px] h-[22px] ml-3  ">
                        {data.brandName}
                          <span>
                            <FiArrowUpRight className="mt-1 text-[#0066FF]" />
                          </span>
                        </div>
                      </button>
                     </div>
                    </td>
                    <td className="font-normal text-base text-[#191D23] px-3 ">
                     <div className="w-[162px] h-[22px]">  
                     {data.campaignName}
                     </div>
                    </td>
                    <td className="font-normal text-base text-[#191D23] px-3 ">
                     <div className="w-[103px] h-[22px]"> {data.platforms}</div>
                    </td>
                    <td className="font-normal text-base text-[#191D23] px-3 ">
                      <div className="w-[106px] h-[22px]">{data.AppliedDate}</div>
                    </td>
                    <td>
                      <div
                        className={`flex
                       px-[8px] py-[2px] rounded-[14px]  h-[24px] items-center ${
                         data.status === "Withdrawn"
                           ? "bg-[#FFBFC3] w-[100px]"
                           : "bg-[#FFEAB0] w-[78px]"
                       }`}
                      >
                        <GoDotFill
                          className={`text-2xl ${
                            data.status === "Withdrawn"
                              ? "text-[#E42828] "
                              : "text-[#FACC15]"
                          }`}
                        />

                        <span className="text-sm ">{data.status}</span>
                      </div>
                    </td>
                    <td>
                      <button
                        className={`text-[#E42828] font-semibold text-[16px] w-[76px] h-[16px] ${
                          data.status === "Withdrawn"
                            ? "text-gray-400 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={data.status === "Withdrawn"}
                      >
                        Withdraw
                      </button>
                    </td>
                    <td>
                      <button
                        className="w-[120px] h-[35px] px-[16px] rounded-[8px] border border-[#0066FF] font-normal text-[14px] text-[#0066FF]"
                        onClick={() => handleViewDetails(index)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <AppiledProfileComp
              selectData={AppliedCompData[selectIndex]}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
            {openModal && (
              <AppCompModal
                closeModal={setOpenModal}
                selectData={AppliedCompData[selectIndex]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedComp;
