import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../assets/styles/form.css";
import { DepartmentData, EmployeeTypeData, TitleData } from "../helper";
import { CREATE_EMPLOYEE_RECORD } from "../services/employee_services";

const EmployeeCreate = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [payload, setPayload] = useState({
    FirstName: "",
    LastName: "",
    Age: 0,
    DateOfJoining: "",
    // Title: "",
    // Department: "",
    // EmployeeType: "",
  });
  const handleOnChange = (e) => {
    const { value, id } = e.target;

    setPayload({
      ...payload,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      FirstName,
      LastName,
      Age,
      DateOfJoining,
      // Title,
      // Department,
      // EmployeeType,
    } = payload;
    //do basic validation

    const newPayload = {
      ...payload,
      Title: title,
      Department: department,
      EmployeeType: employeeType,
    };

    if (
      FirstName === "" ||
      LastName === "" ||
      Age === "" ||
      Age === 0 ||
      DateOfJoining === "" ||
      title === "" ||
      department === "" ||
      employeeType === ""
    ) {
      toast.warn("Some fields are empty");

      return;
    }

    //save the record

    //save data

    const response = await CREATE_EMPLOYEE_RECORD(newPayload);
    console.log(response);

    if (response.data.createEmployee) {
      toast.success("Employee Record created Suceesfully");
      return;
    }

    toast.error(response.errors[0].message || res[pmse.data.errors]);
  };

  return (
    <div className="HomeSection1_area_2_form_div">
      <div className="HomeSection1_area_2_form_div_title"></div>
      <div className="HomeSection1_area_2_form_div_body">
        <form
          onSubmit={handleSubmit}
          className=" w-3/5  flex flex-col gap-4 bg-white mx-auto my-10 px-4 py-10 rounded-md "
        >
          <div className=" flex justify-between">
            <h1 className="font-w500 text-4xl   ">Add an Employee Record</h1>

            <button
              type="submit"
              className="px-5 rounded-sm text-white py-2 bg-green-500"
            >
              Create +
            </button>
          </div>

          <input
            type="text"
            id="FirstName"
            name="First Name"
            value={payload.FirstName}
            onChange={handleOnChange}
            maxLength="80"
            placeholder="First  Name *"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
          />
          <input
            type="text"
            id="LastName"
            name="Last Name"
            value={payload.LastName}
            onChange={handleOnChange}
            maxLength="80"
            placeholder="Last  Name *"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
          />
          <input
            type="text"
            id="Age"
            name="Age"
            value={payload.Age}
            onChange={handleOnChange}
            maxLength="80"
            placeholder="Age *"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
          />
          <input
            type="date"
            id="DateOfJoining"
            value={payload.DateOfJoining}
            onChange={handleOnChange}
            maxLength="80"
            placeholder="Date *"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
          />

          <select
            value={title}
            name="Title"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="">Title</option>
            {TitleData.map((t, index) => {
              return (
                <option key={index} value={t}>
                  {t}
                </option>
              );
            })}
          </select>
          <select
            title={department}
            onChange={(e) => setDepartment(e.target.value)}
            name="department"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
          >
            <option value="">Department</option>
            {DepartmentData.map((t, index) => {
              return (
                <option key={index} value={t}>
                  {t}
                </option>
              );
            })}
          </select>
          <select
            value={employeeType}
            onChange={(e) => setEmployeeType(e.target.value)}
            name="employeeType"
            className="py-3 px-2 mt-5 bg-[#eee] rounded-md"
          >
            <option value="">Employee Type</option>
            {EmployeeTypeData.map((t, index) => {
              return (
                <option key={index} value={t}>
                  {t}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EmployeeCreate;
