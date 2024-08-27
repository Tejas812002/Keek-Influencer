// import React from 'react'

// const TotalEarning = () => {
//   return (
//     <div>TotalEarning</div>
//   )
// }

// export default TotalEarning

import React, { useState } from "react";
import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer,} from "recharts";


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { name, year, value } = payload[0].payload;
    return (
      <div className="custom-tooltip justify-center border-2 w-[96.72px] bg-[#FFFFFF] p-2 rounded shadow-sm">
        <p className="label font-medium text-center text-[#797A7B]">{`${name} ${year}`}</p>
        <p className="value  text-center font-semibold text-[#18181B]">{`$${value}`}</p>
      </div>
    );
  }

  return null;
};

const TotalEarning = ({ expanded }) => {
  const [view, setView] = useState("monthly");

  const data = [
    { name: "Jan", value: 30, year: 2023 },
    { name: "Feb", value: 35, year: 2023 },
    { name: "Mar", value: 30, year: 2023 },
    { name: "Apr", value: 45, year: 2023 },
    { name: "May", value: 42, year: 2023 },
    { name: "Jun", value: 52, year: 2023 },
    { name: "Jul", value: 56, year: 2023 },
    { name: "Aug", value: 50, year: 2023 },
    { name: "Sep", value: 70, year: 2023 },
    { name: "Oct", value: 72, year: 2023 },
    { name: "Nov", value: 70, year: 2023 },
    { name: "Dec", value: 85, year: 2023 },
    
  ];

  const filteredData = view === "monthly" ? data.filter(d => d.year === 2023) : data.filter(d => d.year !== 2023);
  return (
    <>
    <div className={``}>
    <div className={` ${expanded ? "  w-[798px] ":" w-[1000px]"} ml-2  mt-5 p-4 h-[304px] rounded-[14px] bg-[#ffffff] `}    >
     
      <div className=" items-center  w-[144.07px] h-[46px] ml-2  ">
        <h2 className="text-[14px] font-semibold font-body text-[#797A7B]">TOTAL EARNINGS</h2>
        <text className="text-[22px] font-semibold font-body text-[#0062F5]">$45,591</text>
      </div>

      <div className="relative h-[212.36px]    mt-[30px] w-full ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
             data={filteredData}
            margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
           
          >
            <XAxis  className="font-bold "
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13,  fontWeight:"400", fill: "#52525B" }} // Ensure labels are visible
              padding={{ left: 0, right: 0}}  // Prevent clipping of the first and last labels
              
            />
           <Tooltip 
                content={<CustomTooltip />} 
                position={{ y: -20 }} // Adjusting the position above the blue circle
                offset={-40}
              />
            <Area  width="200px"
              type="monotone"
              dataKey="value"
               stroke="#0062F5"
              strokeWidth={2}
              fill="#EEF2FF80"
            
            />

            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
    </>
  );
};

export default TotalEarning;
