import React from 'react'
import Image from 'next/image'

import Logo from '../../assets/courses.svg'

const SideBar = () => {
  return (
    <div
      className="flex h-screen flex-col bg-[#F2EAE1]"
      style={{ maxWidth: '270px' }}
    >
      <div className="flex items-center p-4">
        <div className="h-12 w-12 rounded-full bg-white"></div>
        <div className="ml-2">
          <p className="font-bold">John Doe</p>
          <p>Admin</p>
        </div>
      </div>

      <Logo />

      <div className="p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="font-medium ">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="font-medium">
                Course
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="font-medium">
                Students
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="font-medium">
                Payment
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="font-medium">
                Report
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="font-medium">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-auto p-4">
        <a href="#" className="font-medium">
          Logout
        </a>
      </div>
    </div>
  )
}

export default SideBar
