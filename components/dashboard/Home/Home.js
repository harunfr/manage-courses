import React from "react"
import Link from "next/link"

import Students from "../../../assets/students-lg.svg"
import Course from "../../../assets/course-lg.svg"
import Payments from "../../../assets/payments-lg.svg"
import Users from "../../../assets/users-lg.svg"

import Card from "./Card"

function Home() {
  return (
    <main className=" flex flex-1 flex-wrap content-start items-start justify-between gap-7 bg-[#FDFDFD] px-8 py-7">
      <Link href="/dashboard/students">
        <Card Icon={Students} bgColor="#F0F9FF" amount="243" type="students" />
      </Link>
      <Link href="/dashboard">
        {" "}
        <Card Icon={Course} bgColor="#FEF6FB" amount="13" type="course" />
      </Link>
      <Link href="/dashboard">
        {" "}
        <Card
          Icon={Payments}
          bgColor="#FEFBEC"
          amount="556,000"
          type="payments"
        />
      </Link>
      <Link href="/dashboard">
        {" "}
        <Card Icon={Users} amount="3" type="users" />
      </Link>
    </main>
  )
}

export default Home
