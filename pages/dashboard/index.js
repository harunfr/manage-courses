import Link from 'next/link'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/students">Students</Link>
    </div>
  )
}

export default Dashboard
