import React, { useContext, useState, useEffect, useRef } from "react";
import { Mycontext } from "../../../utils/Context";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiImageBold } from "react-icons/pi";

const OngoingPop = ({ isModalVisible, setIsModalVisible, selectData }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const { campData, setCampData } = useContext(Mycontext);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleApply = () => {
    localStorage.setItem("campaignData", JSON.stringify(campData));
    alert(" Do you want to submit!");
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const modalref = useRef();
  const modalclose = (e) => {
    if (modalref.current === e.target) {
      closeModal();
    }
  };

  return (
    <>
      {isModalVisible && (
        <div
          ref={modalref}
          onClick={modalclose}
          className="fixed inset-0 h-[1600px]  top-[-6%] z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white absolute top-[5%] w-[529px] h-[606px] p-4 rounded-md">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={closeModal}
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
                  <img src={selectData.img} width="50px" height="50px" />{" "}
                </div>
                <div>
                  <h1 className="text-[26px] font-body font-semibold text-[#0066FF]">
                    {selectData.campaignName}
                  </h1>
                  <p className="text-[12px] font-body font-normal text-[#797A7B]">
                    {selectData.brandName}
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
                    {selectData.platform.join(",")}
                  </div>
                </div>

                {/* Location */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">
                    Location:
                  </div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">
                    {selectData.location}
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
                    End Date:
                  </div>
                  <div className="text-[14px] font-body font-normal text-[#000000]">
                    {" "}
                    {selectData.endDate}{" "}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="flex justify-between py-2">
                  <div className="text-[12px] font-body font-normal text-[#797A7B]">
                    Deliverables:
                  </div>
                  <div className="flex items-center gap-2">
                    {selectData.postCount > 0 && (
                      <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                        {selectData.postCount} x post
                      </div>
                    )}

                    {selectData.reelCount > 0 && (
                      <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                        {selectData.reelCount} x reel
                      </div>
                    )}

                    {selectData.storyCount > 0 && (
                      <div className="bg-[#e8fff0] text-[#1f2223] text-[14px] font-normal font-body px-3 py-1 rounded-full">
                        {selectData.storyCount} x story
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
                    Payment / {selectData.balance}{" "}
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

              <div className="py-5 flex space-x-4">
                <button
                  onClick={handleCancel}
                  className="text-[14px] border-2 border-[#0066ff]  px-4 w-[128px] h-[35px] rounded-[4px] cursor-pointer font-body font-normal text-[#0066Ff]"
                >
                  Cancel
                </button>
                <button
                  className=" text-white text-[14px] font-body font-normal bg-[#0066ff]  px-[16px] w-[300px] h-[35px] rounded-[4px]"
                  onClick={handleApply}
                >
                  Submit proof
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OngoingPop;
