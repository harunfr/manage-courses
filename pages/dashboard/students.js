// student.js
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import SearchInput from '../../components/dashboard/students/SearchInput'
import StudentList from '../../components/dashboard/students/StudentList'
import Pagination from '../../components/dashboard/students/Pagination'
import {
  createApiQueryString,
  createURLPath,
} from '../../utils/apiUtils'
import StudentForm from '../../components/dashboard/students/StudentForm'

export default function Students() {
  const router = useRouter()

  const [searchText, setSearchText] = useState('')
  const [perPage, setPerPage] = useState('6')
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [editingStudentId, setEditingStudentId] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    setData(null) // Reset the data to null

    const { page, size, search } = router.query

    console.log(`page: ${page}, size: ${size}, search: ${search}`)

    setCurrentPage(Number(page) || 1)
    setPerPage(size || '6')
    setSearchText(search || '')

    const fetchData = async () => {
      try {
        console.log(
          `query str: ${createApiQueryString(page, size, search)}`
        )
        const response = await fetch(
          createApiQueryString(page, size, search)
        )

        if (!response.ok) {
          throw new Error('Error loading data')
        }
        const responseData = await response.json()
        console.log(responseData)
        setData(responseData)
        setError(null)
      } catch (error) {
        setData(null)
        setError(error.message)
      }
    }

    fetchData()
  }, [router.query])

  const handleSearch = (e) => {
    const newSearchText = e.target.value
    setCurrentPage(1)
    setSearchText(newSearchText)
    router.push(createURLPath(newSearchText, perPage, 1))
  }

  const handlePerPageChange = (e) => {
    setPerPage(e.target.value)
    setCurrentPage(1)
    router.push(createURLPath(searchText, e.target.value, 1))
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      router.push(createURLPath(searchText, perPage, newPage))
    }
  }

  const handleNextPage = () => {
    const newPage = currentPage + 1
    setCurrentPage(newPage)
    router.push(createURLPath(searchText, perPage, newPage))
  }

  const handleCreateStudent = (studentData) => {
    // Logic to create a new student
    console.log('Creating student:', studentData)
    // Perform the necessary API request or state update to create a new student
  }

  const handleUpdateStudent = (studentId, studentData) => {
    // Logic to update an existing student
    console.log('Updating student:', studentId, studentData)
    // Perform the necessary API request or state update to update the student
  }

  const handleEditStudent = (studentId) => {
    setEditingStudentId(studentId)
  }

  const handleDeleteStudent = (studentId) => {
    // Logic to delete a student
    console.log('Deleting student:', studentId)
    // Perform the necessary API request or state update to delete the student
  }

  const handleCancelEdit = () => {
    setEditingStudentId(null)
    setShowCreateForm(false)
  }

  const handleShowCreateForm = () => {
    setShowCreateForm(true)
  }

  return (
    <div>
      <button onClick={handleShowCreateForm}>Add New Student</button>
      <SearchInput
        searchText={searchText}
        handleSearch={handleSearch}
      />
      <StudentList
        data={data}
        handleEditStudent={handleEditStudent}
        handleDeleteStudent={handleDeleteStudent}
      />

      <Pagination
        currentPage={currentPage}
        perPage={perPage}
        data={data}
        handlePerPageChange={handlePerPageChange}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />

      {editingStudentId && (
        <StudentForm
          initialData={data?.users.find(
            (user) => user.id === editingStudentId
          )}
          handleSubmit={handleUpdateStudent} // Use handleUpdateStudent for editing
          handleCancel={handleCancelEdit}
        />
      )}

      {showCreateForm && (
        <StudentForm
          handleSubmit={handleCreateStudent}
          handleCancel={handleCancelEdit}
        />
      )}
    </div>
  )
}
