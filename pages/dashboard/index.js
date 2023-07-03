import Link from "next/link"
import Head from "next/head"

import SideBar from "@/components/dashboard/SideBar/SideBar"
import Header from "@/components/dashboard/Header"
import DashboardHome from "@/components/dashboard/Home/Home"

const Dashboard = () => {
  return (
    <div className="flex">
      <Head>
        <title>Dashboard | Home</title>
      </Head>
      <SideBar selectedPage="Home" />
      <div className="flex flex-1 flex-col">
        <Header />
        <DashboardHome />
      </div>
    </div>
  )
}

export default Dashboard
