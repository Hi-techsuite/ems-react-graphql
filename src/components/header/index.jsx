import React, { useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="bg-black py-4 text-white px-4 flex justify-between items-center">
      <ul>
        <a href="/" className="">
          <li>Employee Management System</li>
        </a>
      </ul>

      <a href="/create-employee"> Create Employee</a>

      {/* <div className=" flex w-2/4  ">
        {showSearch ? (
          <div className="flex  gap-4 items-center relative w-full">
            <input
              type="text"
              placeholder="search employee"
              className="px-3 py-2 w-full text-black rounded-md  list-none outline-none"
            />

            <div className="absolute top-0 right-0">search</div>
          </div>
        ) : (
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="bg-gray-700 px-5 py-2 rounded-xl"
          >
            search
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Header;
