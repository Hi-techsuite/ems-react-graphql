import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdViewModule } from "react-icons/md";
import { useMemo, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const EmployeeTable = (props) => {
  const navigate = useNavigate();
  const { columnsData, tableData } = props;

  const [viewInfo, setViewInfo] = useState({});

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page,
    pageCount,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    getTableBodyProps,
    // initialState,
  } = tableInstance;
  // initialState.pageSize = 5;

  return (
    <div className={"w-full h-full  pb-6  overflow-x-auto sm:overflow-x-auto "}>
      <div className="relative flex items-center justify-between pt-4"></div>

      <div className="mt-8  overflow-scroll ">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";

                    cell.column.id === "FirstName" &&
                      (data = <p>{cell.value}</p>);
                    cell.column.id === "LastName" &&
                      (data = (
                        <p
                          className={`${
                            !cell.value && "font-bold text-blue-400"
                          }`}
                        >
                          {cell.value ? cell.value : "NULL"}
                        </p>
                      ));

                    cell.column.Header === "Title" &&
                      (data = <p>{cell.value}</p>);
                    cell.column.Header === "Department" &&
                      (data = <p>{cell.value}</p>);

                    cell.column.Header === "DateOfJoining" &&
                      (data = (
                        <a
                          className="cursor-pointer font-black"
                          href={`tel:${cell.value}`}
                        >
                          {cell.value}
                        </a>
                      ));
                    cell.column.Header === "Age" &&
                      (data = (
                        <a
                          className="cursor-pointer font-black"
                          href={`tel:${cell.value}`}
                        >
                          {cell.value}
                        </a>
                      ));
                    cell.column.Header === "EmployeeType" &&
                      (data = (
                        <a
                          className="cursor-pointer font-black"
                          href={`tel:${cell.value}`}
                        >
                          {cell.value}
                        </a>
                      ));
                    cell.column.Header === "CurrentStatus" &&
                      (data = (
                        <p className="cursor-pointer font-black">
                          {cell.value === true ? 1 : 0}
                        </p>
                      ));

                    return (
                      <>
                        <td
                          className="pt-[14px] pb-[18px] sm:text-[14px]"
                          {...cell.getCellProps()}
                          key={index}
                        >
                          {data}
                        </td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EmployeeTable;
