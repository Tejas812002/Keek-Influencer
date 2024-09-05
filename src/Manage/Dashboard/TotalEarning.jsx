




import React, { useState } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// Custom format function to add a comma after every two digits
const formatNumber = (num) => {
  // Convert the number to a string
  let numStr = num.toString();

  // Reverse the string, add commas every two digits, then reverse it back
  let formattedStr = numStr.split('').reverse().join('')
    .replace(/(\d{2})(?=\d)/g, '$1,')
    .split('').reverse().join('');

  // Add the $ sign in front
  return `$${formattedStr}`;
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { name, year, value } = payload[0].payload;
    return (
      <div className="custom-tooltip justify-center border-2 w-[96.72px] bg-[#FFFFFF] p-2 rounded shadow-sm">
        <p className="label font-medium text-center font-body  text-[#797A7B]">{`${name} ${year}`}</p>
        <p className="value text-center font-semibold font-body text-[#18181B]">{`${formatNumber(value)}`}</p>
      </div>
    );
  }

  return null;
};

const TotalEarning = ({ expanded }) => {
  const [view, setView] = useState("monthly");

  const data = [
    { name: "Jan", value: 3045, year: 2021 },
    { name: "Feb", value: 3563, year: 2021 },
    { name: "Mar", value: 3063, year: 2021 },
    { name: "Apr", value: 4563, year: 2021 },
    { name: "May", value: 4263, year: 2021 },
    { name: "Jun", value: 5263, year: 2021 },
    { name: "Jul", value: 5663, year: 2021 },
    { name: "Aug", value: 5063, year: 2021 },
    { name: "Sep", value: 7063, year: 2021 },
    { name: "Oct", value: 7263, year: 2021 },
    { name: "Nov", value: 9063, year: 2021 },
    { name: "Dec", value: 11063, year: 2021 },
  ];

  const filteredData = view === "monthly" ? data.filter(d => d.year === 2021) : data.filter(d => d.year !== 2023);
  return (
    <>
      <div className={``}>
        <div className={` ${expanded ? "  w-[798px] " : " w-[1000px]"} ml-2  mt-5 p-4 h-[304px] rounded-[14px] bg-[#ffffff] `}    >
          <div className=" items-center  w-[144.07px] h-[46px] ml-2  ">
            <div className="w-[144.07px] h-[25px]">
              <h2 className="text-[14px] font-semibold font-body text-[#797A7B]">TOTAL EARNINGS</h2>
            </div>
            <div className="w-[144.07px] h-[24px]">           
               <text className="text-[22px] font-semibold font-body text-[#0062F5]">$45,591</text>
            </div>
          </div>

          <div className={`relative h-[212.36px]  ml-[5px]  mt-[30px]   ${expanded ? " w-[748.93px] " : " w-[950px]"} `}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={filteredData}
                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
              >
                <XAxis
                  className="font-bold"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "500", fill: "#52525B" }} // Ensure labels are visible
                  padding={{ left: 0, right: 0 }} // Prevent clipping of the first and last labels
                />
                <Tooltip
                  content={<CustomTooltip />}
                  position={{ y: -20 }} // Adjusting the position above the blue circle
                  offset={-45}
                />
                <Area
                  width="200px"
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
