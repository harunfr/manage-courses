import React from 'react'
import Image from 'next/image'

import Home from '../../assets/home.svg'
import Course from '../../assets/course.svg'
import Students from '../../assets/students.svg'
import Payment from '../../assets/payment.svg'
import Report from '../../assets/report.svg'
import Settings from '../../assets/settings.svg'
import Logout from '../../assets/logout.svg'

const SidebarLink = ({ href, text, Icon }) => {
  return (
    <li>
      <a href={href} className="text-sm font-medium">
        <div className="flex items-center gap-x-4">
          <Icon width="20px" />
          {text}
        </div>
      </a>
    </li>
  )
}

const SideBar = () => {
  return (
    <div className="flex h-screen max-w-[270px] flex-col items-center bg-[#F2EAE1]">
      {/* Title */}
      <h1 className="mb-9 mt-[0.89rem] text-xl font-bold uppercase">
        <span
          style={{
            borderLeft: '4px solid orange',
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
      <div className="mb-12 flex flex-col items-center  p-4">
        <div className="mb-5">
          <Image
            src="/images/avatar.png"
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        <p className="mb-2 text-[17px] font-bold">John Doe</p>
        <p className="text-primary text-sm  font-medium">Admin</p>
      </div>

      <div className="p-4">
        <nav>
          <ul className="ml-[-4px]	flex flex-col items-start gap-y-10">
            <SidebarLink href="#" text="Home" Icon={Home} />
            <SidebarLink href="#" text="Course" Icon={Course} />
            <SidebarLink href="#" text="Students" Icon={Students} />
            <SidebarLink href="#" text="Payment" Icon={Payment} />
            <SidebarLink href="#" text="Report" Icon={Report} />
            <SidebarLink href="#" text="Settings" Icon={Settings} />
          </ul>
        </nav>
      </div>

      <div className="mb-8 mt-auto flex items-end gap-x-6">
        <a href="#" className="text-sm font-medium">
          Logout
        </a>
        <Logout />
      </div>
    </div>
  )
}

export default SideBar
/**
 * const SidebarLink = ({ href, text, Icon }) => {
  return (
    <li>
      <a href={href} className="text-sm font-medium">
        <div className="flex items-center gap-x-4">
          <Icon />
          {text}
        </div>
      </a>
    </li>
  )
}

 */
