import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

// dashboard genel
import SideBar from "@/components/dashboard/SideBar/SideBar"
import Header from "@/components/dashboard/Header"

// students sayfasina ozel
import StudentList from "../../components/dashboard/students/StudentList"
import Pagination from "../../components/dashboard/students/Pagination"
import StudentForm from "../../components/dashboard/students/StudentForm/StudentForm"
import StudentsHeader from "@/components/dashboard/students/StudentsHeader"
import Notification from "@/components/dashboard/students/Notification"

// helper function lar
import { createApiQueryString, createURLPath } from "../../utils/apiUtils"

export default function Students() {
  // router i baslat
  const router = useRouter()

  // STATE ler
  // pagination ve search
  const [searchText, setSearchText] = useState("")
  const [perPage, setPerPage] = useState("6")
  const [currentPage, setCurrentPage] = useState(1)

  // data fetch
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // crud operasyonlar
  const [showSideBar, setShowSideBar] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [notification, setNotification] = useState(null)
  const [editingStudentData, setEditingStudentData] = useState(null)

  useEffect(() => {
    // loading durumunu gosterebilmek icin
    setData(null)

    // query parametrelerini almak icin
    const { page, size, search } = router.query

    // sayfa ilk yuklenirken sayfadaki ogeler url ile eslesiyor
    setCurrentPage(Number(page) || 1)
    setPerPage(size || "6")
    setSearchText(search || "")

    const fetchData = async () => {
      try {
        const response = await fetch(createApiQueryString(page, size, search))

        const responseData = await response.json()
        setData(responseData)
        setError(null)
      } catch (error) {
        setData(null)
        setError(error.message)
      }
    }

    fetchData()
  }, [router.query])

  // EVENT HANDLERS
  // search ve pagination
  const handleSearch = (e) => {
    const newSearchText = e.target.value
    setCurrentPage(1)
    setSearchText(newSearchText)
    router.push(createURLPath(newSearchText, perPage, 1))
  }

  const handlePerPageChange = (e) => {
    const newPage = e.target.value
    setPerPage(newPage)
    setCurrentPage(1)
    router.push(createURLPath(searchText, newPage, 1))
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

  // ui elementleri
  const handleOpenEditForm = (studentData) => {
    setEditingStudentData(studentData)
    setShowForm(true)
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  const handleCancel = () => {
    setEditingStudentData(null)
    setShowForm(false)
  }

  const handleShowSideBar = () => {
    console.log(showSideBar)
    setShowSideBar(!showSideBar)
  }

  // api icin crud operasyonlar
  const handleCreateStudent = (studentData) => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData)
    })
      .then((res) => res.json())
      .then((data) => {
        const addedStudent = data.firstName + " " + data.lastName
        setNotification({
          message: `Student ${addedStudent} successfully added`,
          duration: 3000
        })
      })
      .catch((error) => {
        setError("Can not add student, reason:" + error.message)
      })

    setShowForm(false)
  }

  const handleEditStudent = (studentData) => {
    fetch(`https://dummyjson.com/users/${studentData.id}`, {
      method: "PATCH" /* ya da PUT */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData)
    })
      .then((res) => res.json())
      .then((data) => {
        setEditingStudentData(null)
        const editedStudent = data.firstName + " " + data.lastName
        setNotification({
          message: `Student ${editedStudent} successfully edited`,
          duration: 3000
        })
      })
      .catch((error) => {
        setError("Can not edit student, reason:" + error.message)
      })

    setShowForm(false)
  }

  const handleDeleteStudent = (studentId) => {
    console.log("Deleting student:", studentId)
    fetch(`https://dummyjson.com/users/${studentId}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        const deletedStudent = data.firstName + " " + data.lastName
        setNotification({
          message: `Student ${deletedStudent} successfully deleted`,
          duration: 3000
        })
      })
      .catch((error) => {
        setError("Can not delete student, reason:" + error.message)
      })
  }

  return (
    <div className="flex">
      <Head>
        <title>Dashboard | Students</title>
      </Head>

      <SideBar selectedPage="Students" showSideBar={showSideBar} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header showSideBarHandler={handleShowSideBar} />

        {/* Students sayfasi ozel */}
        <main className="flex-1 bg-[#F8F8F8] px-[1.875rem]">
          {/* Students Headeri */}
          <StudentsHeader
            searchText={searchText}
            handleSearch={handleSearch}
            handleShowCreateForm={handleShowForm}
          />

          {/* Students Tablosu */}
          <StudentList
            data={data}
            openEditFormHandler={handleOpenEditForm}
            handleDeleteStudent={handleDeleteStudent}
            error={error}
          />

          {/* Pagination Students Tablo alti */}
          <Pagination
            currentPage={currentPage}
            perPage={perPage}
            data={data}
            handlePerPageChange={handlePerPageChange}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />

          {/* Create & Edit Form */}
          {showForm && (
            <StudentForm
              handleShowForm={handleShowForm}
              handleCreateStudent={handleCreateStudent}
              handleEditStudent={handleEditStudent}
              initialData={editingStudentData}
              cancelHandler={handleCancel}
            />
          )}

          {/* Notification dialog */}
          {notification && (
            <Notification
              message={notification.message}
              duration={notification.duration}
              onClose={() => setNotification(null)}
            />
          )}

          {/*  */}
        </main>
      </div>
    </div>
  )
}
