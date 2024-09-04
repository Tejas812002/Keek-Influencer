import React, { useEffect } from "react";
import { useContext, useState, useRef } from "react";
import { Mycontext } from "../../../utils/Context";
import Brand from "../../../Assets/logo.png";
import { IoMdArrowRoundBack } from "react-icons/io";

const AppCompModal = ({ closeModal, selectData }) => {


  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const modalref = useRef();
  const modalclose = (e) => {
    if (modalref.current === e.target) {
      closeModal();
    }
  };
  return (
    <div
      className={` flex relative  ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div
        ref={modalref}
        onClick={modalclose}
        className="fixed inset-0 top-0  z-50 flex items-center justify-center bg-[#00000066] "
      >
        <div className="w-[529px] h-[606px]  bg-white justify-center p-4 rounded-[14px] ">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => closeModal(false)}
          >
            <IoMdArrowRoundBack />
            <span className="text-[14px] font-normal font-body">
              Campaign Preview
            </span>
          </div>

          <div className="p-5 text-start">
            <div className="flex items-center space-x-4 text-start">
              <div>
                {" "}
                <img src={selectData.logo} width="50px" height="50px" />{" "}
              </div>
              <div>
                <h1 className="text-[26px] font-body font-semibold text-[#0066FF]">
                  {selectData.campaignName}
                </h1>
                <p className="text-[12px] font-body font-normal text-[#797A7B]">
                  {selectData.name}
                </p>
              </div>
            </div>
            <div className="py-2">
              <p className="text-[12px] font-body font-normal text-[#797A7B]">
                {" "}
                {selectData.description}{" "}
              </p>
            </div>

            <div className="py-4">
              {/* Platform */}
              <div className="flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B]">
                  Platform:
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  {selectData.socials.join(",")}
                </div>
              </div>

              {/* Location */}
              <div className="flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B]">
                  Location:
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  {selectData.location.join(",")}
                </div>
              </div>

              {/* Start Date */}
              <div className="flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B]">
                  Start Date:
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  {selectData.startDate}
                </div>
              </div>

              {/* End Date */}
              <div className="flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B]">
                  Applied Date:
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  {" "}
                  {selectData.AppliedDate}{" "}
                </div>
              </div>

              {/* Deliverables */}
              <div className="flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B]">
                  Deliverables:
                </div>
                <div className="flex items-center gap-2">
                  {selectData.storyCount > 0 && (
                    <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                      {selectData.storyCount} x Story
                    </div>
                  )}
                  {selectData.reelCount > 0 && (
                    <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                      {selectData.reelCount} x Reel
                    </div>
                  )}
                  {selectData.postCount > 0 && (
                    <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                      {selectData.postCount} x Post
                    </div>
                  )}
                </div>
              </div>

              {/* Compensation */}
              <div className="flex justify-between py-2">
                <div className="text-[12px] font-body font-normal text-[#797A7B]">
                  Compensation:
                </div>
                <div className="text-[14px] font-body font-normal text-[#000000]">
                  Payment / $ {selectData.payment}{" "}
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[14px] font-body font-normal text-[#1F2223]">
                Additional information
              </h1>
              <p className="text-[12px] font-body font-normal text-[#797A7B] py-2">
                {selectData.addInfo}
              </p>
            </div>

            <div className="mt-6 flex gap-[28px] w-[437px]">
              <button
                onClick={() => closeModal(false)}
                className="w-[116px] h-[35px] px-[16px] border text-[#0066FF] border-[#0066FF] rounded-[4px] "
              >
                Cancel
              </button>
              <button
                className={`w-[293px] h-[35px] border border-[#E42828] text-[#E42828] text-[16px] rounded-[4px]  ${
                  selectData.status === "Withdrawn" ? "cursor-not-allowed " : ""
                }`}
                disabled={selectData.status === "Withdrawn"}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCompModal;
