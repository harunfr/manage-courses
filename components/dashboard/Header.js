import React from 'react'

import Back from '../../assets/back.svg'
import Notifications from '../../assets/notifications.svg'

const Header = () => {
  return (
    <header className="flex items-center justify-between	py-5 pe-[3.2rem] ps-[1.88rem]">
      <Back />
      <Notifications />
    </header>
  )
}

export default Header
