// StudentList.js
import React from 'react'

const StudentList = ({
  data,
  handleEditStudent,
  handleDeleteStudent,
}) => {
  if (data === null) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data?.users.map(
        ({
          id,
          image,
          firstName,
          lastName,
          email,
          phone,
          domain,
          company,
        }) => (
          <li key={id}>
            <img
              width="40"
              src={image}
              alt={`${firstName} ${lastName}`}
            />{' '}
            {firstName} {lastName} | {email} | {phone} | {domain} |{' '}
            {company.name}{' '}
            <button onClick={() => handleEditStudent(id)}>
              Edit
            </button>{' '}
            <button onClick={() => handleDeleteStudent(id)}>
              Delete
            </button>
          </li>
        )
      )}
    </ul>
  )
}

export default StudentList
