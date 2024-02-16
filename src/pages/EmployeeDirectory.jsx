import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import EmployeeRecords from "../components/EmployeeRecords";
import {
  FETCH_ALL_EMPLOYEE,
  FILTER_OPTIONS,
} from "../services/employee_services";

const EmployeeDirectory = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const fetchEmployees = async () => {
    setLoading(true);
    const res = await FETCH_ALL_EMPLOYEE();
    setLoading(false);
    //if no employee object exists, exit the block
    if (!res?.employees) return;
    setEmployees(res.employees);
  };

  const [filterBy, setFilterBy] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  const filterData = async (search, category) => {
    setLoading(true);
    const res = await FILTER_OPTIONS({ search, category });
    console.log(res);
    setLoading(false);
    if (!res?.findbyOption) return;
    setEmployees(res.findbyOption);
  };
  return (
    <div className="flex flex-col px-4 ">
      <div className="flex bg-slate-500  self-end w-max rounded-full  my-3   pr-3   justify-end items-center ">
        <input
          type="text"
          placeholder="search employee"
          className="px-3 py-3  text-black w-[30vw] rounded-full rounded-tr-none rounded-br-none bg-gray-100  list-none outline-none"
        />
        <button className="h-full  rounded-full px-3 rounded-tl-none rounded-bl-none  ">
          submit
        </button>
      </div>

      <div className="flex flex-col bg-white px-3  mx-10 py-3 my-10 ">
        <p className="border-b border-gray-500 pb-2 font-bold">
          Filter Options
        </p>

        <div className="flex gap-4 py-4 justify-around items-center ">
          <p>Filter By</p>
          <select
            className="flex-1 py-2 bg-gray-200 px-2 rounded-md "
            onChange={(e) => setFilterBy(e.target.value)}
            value={filterBy}
          >
            <option value="">Choose Option</option>
            <option value="Title">Title</option>
            <option value="Department">Department</option>
            <option value="EmployeeType">EmployeeType</option>
          </select>
          <p>Query </p>
          <input
            type="text"
            className="py-2 bg-[#e5e7eb] flex-1 px-4 outline-none"
            placeholder="eg Employee, Manager"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={() => filterData(query, filterBy)}
            className="flex-1 bg-green-500 py-2 rounded-md"
          >
            Filter
          </button>
        </div>

        <button
          onClick={() => {
            fetchEmployees();
            setFilterBy("");
            setQuery("");
          }}
          className=" bg-gray-700 w-max px-4 py-2 text-white rounded-md font-thin self-center"
        >
          Reset FIlter
        </button>
      </div>
      <EmployeeRecords payload={employees} />
    </div>
  );
};

export default EmployeeDirectory;
