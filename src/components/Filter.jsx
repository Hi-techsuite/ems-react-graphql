import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col bg-white px-3  mx-10 py-3 my-10 ">
      <p className="border-b border-gray-500 pb-2 font-bold"> Filter Options</p>

      <div className="flex  gap-5 px-10 py-4">
        <select
          name=""
          id=""
          className="flex-1 py-2 bg-gray-200 px-2 rounded-md"
        >
          {/* Employee, Manager, Director, VP */}
          <option value="">Title</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="VP">VP</option>
          <option value="Director">Director</option>
        </select>

        {/* IT, Marketing, HR, Engineering  */}
        <select className="flex-1 py-2 bg-gray-200 px-2 rounded-md">
          <option value="">Department</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>

        {/* FullTime, PartTime, Contract, Seasonal */}
        <select className="flex-1 py-2 bg-gray-200 px-2 rounded-md">
          <option value="">Employee Type</option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </div>

      <button className=" bg-gray-700 w-max px-4 py-2 text-white rounded-md font-thin self-center">
        Reset FIlter
      </button>
    </div>
  );
};

export default Filter;
