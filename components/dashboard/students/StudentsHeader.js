import React from "react"
import Search from "../../../assets/search.svg"

function StudentsHeader({ searchText, handleSearch, handleShowCreateForm }) {
  return (
    <div className="flex h-[67.5px] flex-wrap items-center justify-between border-b border-[#E5E5E5] ">
      <h1 className="text-[1.375rem] font-bold">Students List</h1>

      <div className="flex items-center justify-center">
        <div className=" relative mr-6 max-sm:mr-3">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border py-2 pl-3 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 max-md:pr-0 max-sm:w-28"
            value={searchText}
            onChange={handleSearch}
          />
          <Search
            className="absolute"
            style={{
              top: "50%",
              right: "14px",
              transform: "translateY(-50%)"
            }}
          />
        </div>

        <button
          className="rounded bg-[#FEAF00]  p-3 px-7 text-sm uppercase text-white hover:opacity-70 "
          onClick={handleShowCreateForm}
        >
          Add
          <span className="inline max-sm:hidden"> New Student</span>
        </button>
      </div>
    </div>
  )
}

export default StudentsHeader
