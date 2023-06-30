import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Manage Courses</h1>
      <h2>Redirecting to signin...</h2>
      <Link href="/signin">Signin</Link>
    </div>
  )
}

export default HomePage
