import React from "react"

import Back from "../../assets/back.svg"
import Notifications from "../../assets/notifications.svg"

const Header = ({ showSideBarHandler }) => {
  return (
    <header className="flex items-center justify-between	py-5 pe-[3.2rem] ps-[1.88rem]">
      <button onClick={showSideBarHandler}>
        <Back className=" rotate-180 cursor-pointer rounded-full  hover:bg-[#feae0060] max-lg:bg-lime-400 lg:rotate-0" />
      </button>
      <Notifications className="cursor-pointer rounded-full hover:bg-[#feae0060]" />
    </header>
  )
}

export default Header
