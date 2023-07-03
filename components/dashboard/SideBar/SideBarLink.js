import React from 'react'
import Link from 'next/link'

function SidebarLink({ href, text, Icon, selected }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex-1 rounded ${
          selected && 'bg-[#FEAF00]'
        } block cursor-pointer	text-sm font-medium hover:bg-[#feae0060]`}
        style={{
          padding: '10px 52px 10px 39px',
        }}
      >
        <div className="flex items-center gap-x-4">
          <Icon width="20px" />
          {text}
        </div>
      </Link>
    </li>
  )
}

export default SidebarLink
