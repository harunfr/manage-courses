import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Home from '../../../assets/home.svg'
import Course from '../../../assets/course.svg'
import Students from '../../../assets/students.svg'
import Payment from '../../../assets/payment.svg'
import Report from '../../../assets/report.svg'
import Settings from '../../../assets/settings.svg'
import Logout from '../../../assets/logout.svg'

import SidebarLink from './SideBarLink'

const SideBar = ({ selectedPage, showSideBar }) => {
  return (
    <div
      className="flex h-screen min-w-[270px] flex-col items-center bg-[#F2EAE1] max-lg:hidden"
      style={{
        display:
          showSideBar === true
            ? 'flex'
            : showSideBar === false
            ? 'none'
            : '',
      }}
    >
      {/* Title */}
      <h1 className="mb-9 mt-[0.89rem] text-xl font-bold uppercase">
        <span
          style={{
            borderLeft: '4px solid #F8D442',
            display: 'inline-block',
            height: '23px',
            transform: 'translateY(4.5px)',
            marginRight: '10px',
            marginLeft: '-9px',
          }}
        ></span>
        Manage Courses
      </h1>

      {/* Profile */}
      <div className="mb-12 flex flex-col items-center p-4">
        <div className="mb-5">
          <Image
            src="/images/avatar.png"
            width={128}
            height={128}
            className="rounded-full"
            alt="Avatar"
          />
        </div>
        <p className="mb-2 text-[17px] font-bold">John Doe</p>
        <p className="text-primary text-sm font-medium">Admin</p>
      </div>
      <div className="p-4">
        <nav>
          {/* Linkler */}
          <ul className="ml-[-4px] flex flex-col items-stretch gap-y-5">
            <SidebarLink
              href="/dashboard"
              text="Home"
              Icon={Home}
              selected={selectedPage === 'Home'}
            />
            <SidebarLink
              href="/dashboard"
              text="Course"
              Icon={Course}
              selected={selectedPage === 'Course'}
            />
            <SidebarLink
              href="/dashboard/students"
              text="Students"
              Icon={Students}
              selected={selectedPage === 'Students'}
            />
            <SidebarLink
              href="/dashboard"
              text="Payment"
              Icon={Payment}
              selected={selectedPage === 'Payment'}
            />
            <SidebarLink
              href="/dashboard"
              text="Report"
              Icon={Report}
              selected={selectedPage === 'Report'}
            />
            <SidebarLink
              href="/dashboard"
              text="Settings"
              Icon={Settings}
              selected={selectedPage === 'Settings'}
            />
          </ul>
        </nav>
      </div>
      <div className="mb-4 mt-auto flex cursor-pointer items-end gap-x-6 rounded px-4 pb-4 pt-4 hover:bg-[#feae0060]">
        <a href="#" className="text-sm font-medium ">
          Logout
        </a>
        <Logout />
      </div>
    </div>
  )
}

export default SideBar
