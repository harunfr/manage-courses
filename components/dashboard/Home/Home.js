import React from "react"

import Students from "../../../assets/students-lg.svg"
import Course from "../../../assets/course-lg.svg"
import Payments from "../../../assets/payments-lg.svg"
import Users from "../../../assets/users-lg.svg"

import Card from "./Card"

function Home() {
  return (
    <main className=" flex flex-1 flex-wrap content-start items-start justify-between gap-7 bg-[#FDFDFD] px-8 py-7">
      <Card Icon={Students} bgColor="#F0F9FF" amount="243" type="students" />
      <Card Icon={Course} bgColor="#FEF6FB" amount="13" type="course" />
      <Card
        Icon={Payments}
        bgColor="#FEFBEC"
        amount="556,000"
        type="payments"
      />
      <Card Icon={Users} amount="3" type="users" />
    </main>
  )
}

export default Home
