"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePerson4 } from "react-icons/md";
import { MdShowChart } from "react-icons/md";
import { Chart } from "react-google-charts";

type Props = {};

export const data = [
  ["Task", "Hours per Day"],
  ["Male", 45],
  ["Female", 30],
  ["Child", 25],
];

export const options = {
  pieHole: 0.7,
  legend: "none",
  pieSliceText: "none",
  pieStartAngle: 160,
  slices: {
    0: { color: "#fdac00" },
    1: { color: "#7a6efe" },
    2: { color: "#24a8fa" },
  },
};

const Patient = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex    flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Patients</h1>
          <button className="text-xs flex items-center bg-white px-4 py-1 rounded-sm">
            2020 <IoIosArrowDown />
          </button>
        </div>
        <div className="rounded-md flex-col text-xs bg-white shadow-md flex ">
          <div className="p-4 rounded-sm min-w-64 flex justify-between gap-5">
            <div className="flex gap-5">
              <p className="bg-[#e8f7fe] text-[#36a4df] rounded-full p-4">
                <MdOutlinePerson4 className="text-xl" />
              </p>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold">24.4k</h1>
                <p className="font-medium">New Patient</p>
              </div>
            </div>
            <div className="text-[#7b73dd] font-medium">
              <MdShowChart />
              15%
            </div>
          </div>
          <div className="p-4 rounded-sm flex justify-between gap-5">
            <div className="flex gap-5">
              <p className="bg-[#fff6e5] text-[#f0a621] rounded-full p-4">
                <MdOutlinePerson4 className="text-xl" />
              </p>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold">166.3k</h1>
                <p className="font-medium">Old Patient</p>
              </div>
            </div>
            <div className="text-[#7b73dd] font-medium">
              <MdShowChart />
              15%
            </div>
          </div>
        </div>
      </div>
      <div className="flex    flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Patients</h1>
          <button className="text-xs flex items-center bg-white px-4 py-1 rounded-sm">
            2020 <IoIosArrowDown />
          </button>
        </div>
        <div className="rounded-md flex-col text-xs bg-white shadow-md flex p-4">
          <Chart
            chartType="PieChart"
            width="100%"
            height="180px"
            data={data}
            options={options}
          />
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1 items-center">
                <p className="bg-[#fdac00] w-2 h-2 rounded-full"></p>
                <p className="font-bold">Male</p>
              </div>
              <p>45%</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1 items-center">
                <p className="bg-[#7a6efe] w-2 h-2 rounded-full"></p>
                <p className="font-bold">Female</p>
              </div>
              <p>30%</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1 items-center">
                <p className="bg-[#24a8fa] w-2 h-2 rounded-full"></p>
                <p className="font-bold">Child</p>
              </div>
              <p>25%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
