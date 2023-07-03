import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Manage Courses</h1>
      <h2>Redirecting to signin...</h2>
      <Link className="text-blue-300" href="/signin">
        Signin
      </Link>
    </div>
  )
}

export default HomePage
