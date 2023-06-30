import React from 'react'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div
      class="flex h-screen flex-col bg-[#F2EAE1]"
      style={{ maxWidth: '270px' }}
    >
      <div class="flex items-center p-4">
        <div class="h-12 w-12 rounded-full bg-white"></div>
        <div class="ml-2">
          <p class="font-bold">John Doe</p>
          <p>Admin</p>
        </div>
      </div>

      <div class="p-4">
        <nav>
          <ul>
            <li class="mb-2">
              <a href="#" class="font-medium ">
                Home
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-medium">
                Course
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-medium">
                Students
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-medium">
                Payment
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-medium">
                Report
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-medium">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="mt-auto p-4">
        <a href="#" class="font-medium">
          Logout
        </a>
      </div>
    </div>
  )
}

export default SideBar
