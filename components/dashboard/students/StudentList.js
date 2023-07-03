import React from "react"

import Delete from "../../../assets/delete.svg"
import Edit from "../../../assets/edit.svg"

const StudentList = ({
  data,
  openEditFormHandler,
  handleDeleteStudent,
  error
}) => {
  if (error && !data) {
    return (
      <div className="flex h-[630px] items-center justify-center">
        <div
          className="rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700"
          role="alert"
        >
          <strong className="font-bold">An error occurred: </strong>
          <span className="block sm:inline">"{error}"</span>
        </div>
      </div>
    )
  }

  if (data === null) {
    return (
      <div className="flex min-h-[610px] items-center justify-center">
        <svg
          aria-hidden="true"
          className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>{" "}
        <span className="text-gray-500">Loading...</span>
      </div>
    )
  }

  if (data?.users.length === 0) {
    return (
      <div className="flex min-h-[610px] items-center justify-center">
        No results found...
      </div>
    )
  }

  return (
    <div className="h-[630px] overflow-x-auto overflow-y-auto">
      <table
        className="min-w-full bg-[#F8F8F8] text-sm"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 10px"
        }}
      >
        <thead>
          <tr className="py-[10px]">
            <th className="thead"></th>
            <th className="thead">Name</th>
            <th className="thead">Email</th>
            <th className="thead">Phone</th>
            <th className="thead">Website</th>
            <th className="thead">Company Name</th>
            <th className="thead"></th>
            <th className="thead"></th>
          </tr>
        </thead>
        <tbody>
          {data?.users.map((student) => (
            <tr
              key={student.id}
              className=" bg-white hover:bg-[#FEAF0045] hover:shadow-md "
            >
              <td className="whitespace-nowrap rounded-l-lg px-4 py-[10px]">
                <img
                  src={student.image}
                  alt={student.firstName}
                  className="border-secondary h-8 min-h-[64px] min-w-[64px] rounded-lg border bg-white"
                  width={64}
                  height={64}
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                {student.firstName + " " + student.lastName}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href={`mailto:${student.email}`}>{student.email}</a>
              </td>
              <td className="whitespace-nowrap px-4 py-2">{student.phone}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href={`https://${student.domain}`} target="_blank">
                  {student.domain}
                </a>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                {student.company.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <button onClick={() => openEditFormHandler(student)}>
                  <Edit />
                </button>
              </td>
              <td className="whitespace-nowrap rounded-r-lg px-4 py-2">
                <button onClick={() => handleDeleteStudent(student.id)}>
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
