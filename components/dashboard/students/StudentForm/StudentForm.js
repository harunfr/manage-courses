import React, { useState, useEffect } from 'react'

import Close from '../../../../assets/close.svg'

import StudentFormField from './StudentFormField'

const StudentForm = ({
  initialData,
  handleEditStudent,
  handleCreateStudent,
  handleShowForm,
  cancelHandler,
}) => {
  const [id, setId] = useState(null)
  const [imageSrc, setImageSrc] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [webSite, setWebSite] = useState('')
  const [company, setCompany] = useState('')

  useEffect(() => {
    if (initialData) {
      setId(initialData.id)
      setImageSrc(initialData.image)
      setFirstName(initialData.firstName)
      setLastName(initialData.lastName)
      setEmail(initialData.email)
      setPhone(initialData.phone)
      setWebSite(initialData.domain)
      setCompany(initialData.company?.name)
    }
  }, [initialData])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const studentData = {
      id,
      imageSrc,
      firstName,
      lastName,
      email,
      phone,
      webSite,
      company,
    }

    if (initialData) {
      // Edit icin olan handler i calistir.
      handleEditStudent(studentData)
    } else {
      // Create icin olan handler i calistir.
      handleCreateStudent(studentData)
    }

    // Reset
    setImageSrc('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setWebSite('')
    setCompany('')
  }

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50">
      <div className="relative min-w-[400px] rounded-lg bg-white p-8">
        <form onSubmit={handleFormSubmit}>
          {/* Form Basligi */}
          <h1 className="mb-4 text-center text-xl font-semibold">
            {initialData ? 'Edit Student' : 'Add New Student'}
          </h1>
          <StudentFormField
            value={imageSrc}
            onChangeHandler={setImageSrc}
            name="image source url"
          />
          <StudentFormField
            value={firstName}
            onChangeHandler={setFirstName}
            name="first name"
          />
          <StudentFormField
            value={lastName}
            onChangeHandler={setLastName}
            name="last name"
          />
          <StudentFormField
            value={email}
            onChangeHandler={setEmail}
            name="email"
          />
          <StudentFormField
            value={phone}
            onChangeHandler={setPhone}
            name="phone"
          />
          <StudentFormField
            value={webSite}
            onChangeHandler={setWebSite}
            name="web site"
          />
          <StudentFormField
            value={company}
            onChangeHandler={setCompany}
            name="company name"
          />

          <div className="mt-6 flex gap-x-4">
            {/* Sol alt */}
            <button
              type="submit"
              className="focus:shadow-outline bg-primary w-full rounded px-4 py-3 text-sm font-medium uppercase text-white hover:opacity-60		 focus:outline-none"
              onClick={handleFormSubmit}
            >
              {initialData ? 'Update' : 'Save'}
            </button>

            {/* Sag alt cancel butonu  */}
            <button
              className="rounded border border-gray-400 bg-transparent px-4 py-2 text-sm font-medium  uppercase text-gray-500 hover:border-transparent hover:bg-gray-200 hover:text-white"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
          {/* Sag ust kapatma butonu */}
          <button
            className="absolute right-0 top-0 m-2 rounded-full  p-2 text-[#feaf00]"
            onClick={cancelHandler}
          >
            <Close />
          </button>
        </form>
      </div>
    </div>
  )
}

export default StudentForm
