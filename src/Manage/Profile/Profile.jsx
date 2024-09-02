import React from "react";
import I2 from "../../Assets/I2.png";
import I1 from "../../Assets/I1.jpg";
import I3 from "../../Assets/I3.jpg";
import I4 from "../../Assets/I4.jpg";
import I5 from "../../Assets/I5.jpg";
import ProfileImg from "../../Assets/Profile.jpg";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

const Profile = () => {
  const socialSitesData = [
    { name: "Instgram", logo: I5, followers: "1M" },
    { name: "Facebook", logo: I3, followers: "1M" },
    { name: "Snapchat", logo: I4, followers: "1M" },
    { name: "Linkedin", logo: I1, followers: "1M" },
    { name: "Youtube", logo: I2, followers: "1M" },
  ];

  const testimonials = [
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      image: ProfileImg,
      name: "Jane Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 4,
    },
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
  ];

  const styles = {
    keyframesMove: `
      @keyframes moveTestimonials {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `,
    moveTestimonials: {
      display: "flex",
      animation: "moveTestimonials 30s linear infinite",
    },
    testimonial: {
      flexShrink: 0,
      width: "236px", // Adjust width as needed
      marginRight: "16px", // Space between testimonials
    },
  };

  return (
    <div className="w-[700px] h-[660px] z-10 pl-[28px] pt-4 rounded-[10px] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]">
      <div className="flex items-center content-center ">
        <div className="flex justify-center item-center">
          <div className="flex gap-5">
            <img src={ProfileImg} className="w-[70px] h-[70px]" alt="Profile" />
            <div class="flex  flex-row space-y-4 h-[59px] items-center">
              <div className="flex flex-col justify-between ">
                <div className=" flex flex-row space-x-4 pb-[10px]">
                  <div className="flex text-[19px] flex-col space-x-2 font-semibold">
                    Crocks, India
                    <div className="flex items-center">
                      <IoMdStar className="text-[#06F]" />
                      <IoMdStar className="text-[#06F]" />
                      <IoMdStar className="text-[#06F]" />
                      <IoMdStar className="text-[#06F]" />
                      <IoMdStarOutline className="text-[#06F]" />
                      <span className="text-xs font-semibold mt-1">4.0</span>
                      &nbsp;
                      <span className="text-xs mt-1">(30 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[56px] mt-[14px] pr-[33px] flex ">
        <div class="box-border  inline-flex items-center gap-[16px] place-content-evenly ">
          {socialSitesData.map((platform, index) => (
            <div
              key={index}
              className="flex box-border items-center rounded-[10px] w-[114px] bg-[#CAE8FF] "
            >
              <div className="w-7 h-7 px-[10px] py-[14px] box-content">
                {/* <div className="bg-slate-600"></div> */}
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="object-fill overflow-hidden rounded"
                />
              </div>

              <div className="flex flex-col py-[12px]">
                <button className="flex flex-row text-[12px] mb-[4px] font-semibold">
                  {platform.name}
                  <FiArrowUpRight className="text-[#0066FF]" />
                </button>
                <h5 className="h-[15px] text-[#000] text-[8px] pb-[2px]  font-normal ">
                  Followers
                </h5>
                <h4 className=" text-[10px] font-bold">{platform.followers}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[634px]">
        <div className="flex flex-row items-center pt-[24px] place-content-evenly ">
          <div className="space-y-4 ">
            <div className="flex flex-col rounded-[10px] pt-[9px] pb-[30px]  px-[23px] bg-[#F6F6F6]">
              <div className="items-center h-[99px] font-semibold text-sm text-[#384EDD]">
                About
                <div className="text-[#57595A] pt-[4px] text-[10px]">
                  This refers to total number of campaigns joined by this
                  influencer Nunc vulputate libero et velit interdum, ac aliquet
                  odio mattis. Class aptent taciti sociosqu . Nunc vulputate
                  libero et velit interdum, ac aliquet odio mattis. Class aptent
                  taciti sociosqu Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti sociosqu Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu{" "}
                </div>
              </div>
            </div>

            <div className="flex items-center rounded-[10px] h-[60px] bg-[#F6F6F6]">
              <div className="py-[9px]  pl-[23px] pr-[33px]">
                <div className=" items-center font-semibold text-sm text-[#384EDD]">
                  Niche
                </div>
                <p className=" text-[#57595A] font-semibold pt-[4px] text-[10px]">
                  Fashion, Travel, Blogs, Lifestyle.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] h-[60px] bg-[#F6F6F6] ">
              <div className="py-[9px] space-x-64 flex items-center flex-row pl-[23px] pr-[33px]">
                <div className="items-center w-[303px] font-semibold text-sm text-[#384EDD]">
                  Total Camapign Hosted
                  <p className="text-[#57595A] font-semibold pt-[4px] text-[10px]">
                    This refers to total number of campaigns hosted by this
                    Brand.
                  </p>
                </div>
                <div className="flex flex-row text-lg  font-semibold text-[#384EDD]">
                  31
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-7 pl-[210px]">
          Checkout other Influencer Experience{" "}
        </div>

        <div className=" pt-5 h-[90px]">
          <div className="relative w-[634px] overflow-hidden">
            <style>{styles.keyframesMove}</style>
            <div style={styles.moveTestimonials}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={styles.testimonial}
                  className="flex items-center gap-[10px] rounded-[14px] shadow-[2_2px_12px_0px_rgba(0,0,0,0.25)]"
                >
                  <img
                    className="w-12 h-12 rounded"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className=" h-[90px] w-[236px]">
                    <div className="flex flex-row ">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} style={{ color: "#0066FF" }}>
                          <IoMdStar />
                        </span>
                      ))}
                    </div>
                    <div className="text-[7px] text-[#57595A] font-semibold pb-[4px]">
                      "{testimonial.text}"
                    </div>
                    <div className="text-[8px] mb-[4px] font-semibold">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
