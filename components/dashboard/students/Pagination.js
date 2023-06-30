import React from 'react'

const Pagination = ({
  currentPage,
  perPage,
  data,
  handlePerPageChange,
  handlePrevPage,
  handleNextPage,
}) => {
  const startIndex =
    data?.total === 0 ? 0 : perPage * (currentPage - 1) + 1
  const endIndex = Math.min(perPage * currentPage, data?.total)

  const perPageOptions = [6, 12, 24]

  return (
    <div>
      <select value={perPage} onChange={handlePerPageChange}>
        {perPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button
        onClick={handleNextPage}
        disabled={data?.total <= perPage * currentPage}
      >
        Next
      </button>

      <p>
        Showing {startIndex} - {endIndex} of {data?.total} ...
      </p>
    </div>
  )
}

export default Pagination
