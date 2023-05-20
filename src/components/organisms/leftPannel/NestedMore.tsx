import React from "react";
import { GiJumpingRope } from "react-icons/gi";
import { SiSublimetext } from "react-icons/si";
import { GrAlert } from "react-icons/gr";
import { MdShowChart } from "react-icons/md";
import { SiAllocine } from "react-icons/si";
import { GiNoodleBall } from "react-icons/gi";

const NestedMore = () => {
  return (
    <div className="flex-col w-44 bg-white ">
      <div className="flex-col border-b-2 p-2 text-sm">
        <div className="m-1 flex">
          <GiJumpingRope className="text-gray-800 mt-1 mr-3" />
          Pin
        </div>
      </div>
      <div className="flex-col border-b-2 p-2 text-sm">
        <div className="m-2 flex hover:bg-slate-50">
          <SiSublimetext className="mt-1 mr-3 text-blue-500" />
          Create GTT
        </div>
        <div className="m-2 flex hover:bg-slate-50">
          <GrAlert className="mt-1 mr-3 text-slate-500" />
          Create alert
        </div>
        <div className="m-2 flex hover:bg-slate-50">
          <MdShowChart className="mt-1 mr-3 text-slate-500" /> Chart
        </div>
      </div>

      <div className="flex-col p-2 text-sm ">
        <div className="m-2 flex hover:bg-slate-50 ">
          <SiAllocine className="mt-1 mr-3" />
          Fundamentals
        </div>
        <div className="m-2 flex hover:bg-slate-50">
          <SiSublimetext className="mt-1 mr-3 text-blue-500" />
          Technicals
        </div>
        <div className="m-2 flex hover:bg-slate-50 ">
          <GiNoodleBall className="mt-1 mr-3 text-red-500 " />
          Option chain
        </div>
      </div>
    </div>
  );
};

export default NestedMore;
