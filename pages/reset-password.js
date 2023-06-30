import Link from 'next/link'

export default function () {
  return (
    <div className="mt-20 text-center">
      <h1>Reset Password Page</h1>
      <Link
        href="signin"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Click to go Signin Page
      </Link>
    </div>
  )
}
