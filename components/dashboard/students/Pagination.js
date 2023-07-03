import React from "react"

import Dropdown from "../../../assets/dropdown.svg"
import Prev from "../../../assets/prev.svg"
import Next from "../../../assets/next.svg"

const Pagination = ({
  currentPage,
  perPage,
  data,
  handlePerPageChange,
  handlePrevPage,
  handleNextPage
}) => {
  const startIndex = !data?.total ? 0 : perPage * (currentPage - 1) + 1
  const endIndex = Math.min(perPage * currentPage, data?.total) || 0

  const perPageOptions = [6, 12, 24]

  return (
    <div>
      <div className="mt-5 flex items-center justify-end font-['Mulish'] text-sm">
        <div className="mr-2 text-[#9FA2B4]">Rows per page: </div>

        <select
          value={perPage}
          onChange={handlePerPageChange}
          className="cursor-pointer appearance-none bg-[#F8F8F8] text-center text-[#4B506D]"
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Dropdown className=" mr-[4.3rem]" />

        <p className="mr-6 text-[#9FA2B4]">
          {startIndex} - {endIndex} of {data?.total || 0}
        </p>
        <button
          className="mr-3 cursor-pointer rounded-full hover:bg-[#feae0060] disabled:cursor-not-allowed disabled:bg-transparent"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Prev />
        </button>
        <button
          onClick={handleNextPage}
          disabled={data?.total <= perPage * currentPage}
          className="cursor-pointer rounded-full hover:bg-[#feae0060] disabled:cursor-not-allowed disabled:bg-transparent"
        >
          <Next />
        </button>
      </div>
    </div>
  )
}

export default Pagination
