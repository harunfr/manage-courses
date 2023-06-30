import React, { useState, useEffect } from 'react'

const StudentForm = ({ initialData, handleSubmit, handleCancel }) => {
  const [imageSrc, setImageSrc] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [webSite, setWebSite] = useState('')
  const [company, setCompany] = useState('')

  useEffect(() => {
    if (initialData) {
      setImageSrc(initialData.image)
      setFirstName(initialData.firstName)
      setLastName(initialData.lastName)
      setEmail(initialData.email)
      setPhone(initialData.phone)
      setWebSite(initialData.domain)
      setCompany(initialData.company.name)
    }
  }, [initialData])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const studentData = {
      imageSrc,
      firstName,
      lastName,
      email,
      phone,
      webSite,
      company,
    }

    if (initialData) {
      // Call the update handler if initialData is provided
      handleSubmit(initialData.id, studentData)
    } else {
      // Call the create handler if initialData is not provided
      handleSubmit(studentData)
    }

    // Reset the form fields
    setImageSrc('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setWebSite('')
    setCompany('')
  }

  const handleFormCancel = () => {
    if (handleCancel) {
      handleCancel()
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Image Source Url:
        <input
          type="text"
          value={imageSrc}
          onChange={(e) => setImageSrc(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        WebSite Url:
        <input
          type="text"
          value={webSite}
          onChange={(e) => setWebSite(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Company Name:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">
        {initialData ? 'Update' : 'Create'}
      </button>
      {/* {initialData && ( */}
      <button type="button" onClick={handleFormCancel}>
        Cancel
      </button>
      {/* )} */}
    </form>
  )
}

export default StudentForm
