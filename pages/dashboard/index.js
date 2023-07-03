import Link from 'next/link'
import SideBar from '@/components/dashboard/SideBar/SideBar'
import Header from '@/components/dashboard/Header'
import DashboardHome from '@/components/dashboard/Home/Home'

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar selectedPage="Home" />
      <div className="flex flex-1 flex-col">
        <Header />
        <DashboardHome />
      </div>
    </div>
  )
}

export default Dashboard
