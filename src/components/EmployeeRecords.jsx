import React from "react";
import EmployeeTable from "./UsersTablee";
import { employee_table_head } from "./EmployeeTableHead";

const EmployeeRecords = ({ headData, payload }) => {
  return (
    <div className="px-20 bg-white rounded-md w-5/5 mx-auto">
      <EmployeeTable columnsData={employee_table_head} tableData={payload} />
    </div>
  );
};

export default EmployeeRecords;
