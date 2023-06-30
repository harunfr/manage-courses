import React from 'react'

const SearchInput = ({ searchText, handleSearch }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={handleSearch}
    ></input>
  )
}

export default SearchInput
