import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import Brand from "../../../Assets/logo.png";
import insta from "../../../Assets/instagram.png";
import fb from "../../../Assets/Facebook.png";
import yt from "../../../Assets/yt.png";
import DataComp from "./Data";
import NewProfileComp from "./NewProfile";
import FilterData from "./FilterData";


const NewOppcomp = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [isModalVisible,setIsModalVisible]=useState(false);
  const [isOpen, setIsOpen] =useState(false)
  const [selectIndex, setSelectIndex] = useState(null);
  const [isFilter, setIsFilter] = useState(false)

   


  const Details = [
    {
      logo: Brand,
      title: 'Save Trees And More',
      name: "Brand Name",
      location: "New Delhi, Mumbai, Chennai",
      startDate :'1 july 2024',
      endDate :'10 july 2024', 
      img1: insta,
      img2: fb,
      img3: yt,
      socials: ["instagram", "facebook", "youtube"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount : 1,
      reelCount :2,
      storyCount :3,
      payment :5000,
      addInfo :" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      title: 'Save Trees And More',
      name: "Brand Name",
      location: "New Delhi, Mumbai, Chennai",
      startDate :'10 july 2024 ',
      endDate :'20 july 2024',
      img1: insta,
      img2: fb,
      img3: yt,
      socials: ["instagram", "facebook", "youtube"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount : 1,
      reelCount :0,
      storyCount :1,
      payment :7000,
      addInfo :" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      title: 'Save Trees And More',
      name: "Brand Name",
      location: "New Delhi, Mumbai, Chennai",
      startDate :'1 july 2024',
      endDate :'10 july 2024',
      img1: insta,
      img2: fb,
      img3: yt,
      socials: ["instagram", "facebook", "youtube"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount : 0,
      reelCount :2,
      storyCount :1,
      payment :6000,
      addInfo :" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
    {
      logo: Brand,
      title: 'Save Trees And More',
      name: "Brand Name",
      location: "New Delhi, Mumbai, Chennai",
      startDate :'1 july 2024',
      endDate :'10 july 2024',
      img1: insta,
      img2: fb,
      img3: yt,
      socials: ["instagram", "facebook", "youtube"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      postCount : 2,
      reelCount :1,
      storyCount :0,
      payment :8000,
      addInfo :" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio .",
    },
  ];

  const handleView =( index )=>{
    setIsModalVisible(true);
    setSelectIndex(index);
  }

  const handleBrand =( index )=>{
    setIsOpen(true);
    setSelectIndex(index);
  }

   const handleFilter=()=>{
    setIsFilter(!isFilter);
   }

  return (
    <div
      className={`flex relative h-[897px] ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      } overflow-y-auto bg-white space-y-4 p-4`}
    >
      <div className="bg-white  w-full">
        <div className={`flex ${expanded ? 'w-[1062px]':'w-full'} h-[52px] justify-between items-center p-4 bg-white border-border`}>
          <div className={``}>
            <h1 className="text-[24px] font-semibold font-body">Opportunities</h1>
            <p className="text-[14px] font-normal font-body text-[#57595a]">
              Discover various brand campaigns —connect, collaborate, and elevate your influence to the next level!
            </p>
          </div>
        </div>
        
        <div className={`flex mt-11 px-4 border-b `}>
          <div className={`flex gap-6  ${expanded ? 'w-[780px]':'w-full'}`}>
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
       
         {/* search bar */}
        <div className={`${expanded ? 'w-[1031px]':'w-full'} flex justify-between  my-7 h-[45px]`}>
          <div className="w-[815px] flex items-center gap-2 border-2 border-[#EAEAEA] bg-[#FFFFFF] px-[16px] py-[8px] rounded-[10px]">
            <span>
              <IoSearch className="w-[18px] h-[18px] text-[#797A7B]" />
            </span>
            <input
              className="text-[#797A7B] text-[12px] font-body font-normal bg-transparent outline-none"
              placeholder="Search Brands"
            />
          </div>
          <div onClick={handleFilter}
            className="w-[106px] cursor-pointer flex items-center gap-2 bg-[#f6f6f6] px-[16px] py-[8px] rounded-[10px] ">
            <span>
              <FiFilter className="w-[16px] h-[16px] text-[#797A7B]" />
            </span>
            <h1 className="text-[#797A7B] text-[16px] font-body font-semibold">Filter</h1>
          </div>
        </div>
        <div>
           
           {/* filter data.... */}
           {isFilter && (<FilterData isFilter={isFilter} setIsFilter={setIsFilter} />)}
        
       </div>
      
 

      <div className="p-4 mt-[-2%] ml-1">
      {Details.map((data, index) => (
        <div key={index}
          className={ ` ${expanded ? 'w-[1013px]':'w-full'} my-4  bg-[#ffffff] border-1 p-5 h-[130px] rounded-[14px]`}
          style={{ boxShadow: "2px 4px 14px 2px #00000040" }}
        >
         
            <div  className={`flex items-center justify-between h-[92px] w-full  ${expanded ?'w-[961px]':'w-full'}`}>
              <div className="mt-2">
                <img src={data.logo} className="w-[90px] h-[90px]" />
              </div>
              {/* logo name and social icon */}
              <div className="w-[264px] h-[90px]">
                <div className="w-[220px] h-[46px]">
                  <h1 className="text-black text-[20px] font-semibold font-body">{data.title}</h1>
                  <p onClick={()=>handleBrand(index)} className="text-[16px] font-semibold font-body text-[#8E9090] cursor-pointer">{data.name}</p>
                </div>
                <div className="flex space-x-3 mt-5">
                  {data.socials.includes('instagram') && (
                    <div className="w-[80px] flex items-center space-x-1 h-[26px] bg-[#f6f6f6] px-[8px] py-[6px] cursor-pointer rounded-[6px]">
                      <img src={data.img1} className="w-[12px] h-[12px]" />
                      <p className="text-[10px] font-body font-normal text-[#1F2223]">Instagram</p>
                    </div>
                  )}
                  {data.socials.includes('facebook') && (
                    <div className="w-[80px] flex items-center space-x-1 h-[26px] bg-[#f6f6f6] px-[8px] py-[6px] cursor-pointer rounded-[6px]">
                      <img src={data.img2} className="w-[12px] h-[12px]" />
                      <p className="text-[10px] font-body font-normal text-[#1F2223]">Facebook</p>
                    </div>
                  )}
                  {data.socials.includes('youtube') && (
                    <div className="w-[80px] flex items-center space-x-1 h-[26px] bg-[#f6f6f6] px-[8px] py-[6px] cursor-pointer rounded-[6px]">
                      <img src={data.img3} className="w-[12px] h-[12px]" />
                      <p className="text-[10px] font-body font-normal text-[#1F2223]">Youtube</p>
                    </div>
                  )}
                </div>
              </div>
              {/* location */}
              <div className="w-[273px] h-[91px]">
                <p className="text-[14px] font-semibold font-body text-[#1F2223]">
                  <span className="font-semibold font-body text-[12px] text-[#797A7B]">LOCATION:</span> {data.location}
                </p>
                <p className="text-[14px] mt-8 font-semibold font-body text-[#1F2223]">
                  <span className="font-semibold font-body text-[12px] text-[#797A7B]">DURATION:</span> {data.startDate} - {data.endDate}
                </p>
              </div>
              {/* ----button.... */}
              <div className="flex flex-col space-y-4">
                <button className="border-2 border-[#384EDD] bg-[#0066FF] px-4 text-[#FFFFFF] text-[12px] font-normal rounded-[8px] w-[120px] h-[38px]">
                  Apply
                </button>
                <button onClick={()=>handleView(index)} className="border-2 border-[#384EDD] text-[#0066FF] px-4 bg-[#FFFFFF] text-[12px] font-normal rounded-[8px] w-[120px] h-[38px]">
                  View details
                </button>
              </div>
            </div>
         
        </div>
         ))}
      </div>
          
        
       

        <div>
          <NewProfileComp selectData={Details[selectIndex]} setIsOpen={setIsOpen} isOpen={isOpen} />
        <DataComp  selectData={Details[selectIndex]} setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />
        </div>
      </div>
    </div>
  );
};

export default NewOppcomp;
