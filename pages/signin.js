import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const Signin = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = (e) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="bg-gradient-1 flex min-h-screen flex-col items-center justify-center">
      <div className="form-shadow rounded-2_5xl px-7_5 pt-10_5 min-w	w-96 min-w-[475px] bg-white pb-11">
        <h1 className="text-3_5xl mb-9 text-center font-bold uppercase">
          <span className="special-left-border"></span>
          Manage Courses
        </h1>
        <h2 className="text-1_5xl mb-1 text-center font-semibold uppercase">
          Sign In
        </h2>
        <p className="text-gray-850 mb-12 text-center text-sm">
          Enter your credentials to access your account
        </p>
        <div className="mb-4">
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border px-4 py-3.5 text-xs placeholder-[#CDCDCD] focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" mb-8 w-full rounded-md border px-4 py-3.5 text-xs font-thin placeholder-[#CDCDCD] focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          onClick={handleSignin}
          className="focus:shadow-outline bg-primary mb-7 w-full rounded px-4 py-3 text-sm font-medium uppercase text-white hover:bg-blue-600 focus:outline-none"
        >
          Sign In
        </button>
        <p className="text-gray-850 text-center text-sm">
          Forgot your password?
          <Link
            className="text-primary font-semibold underline"
            href="/reset-password"
          >
            {' '}
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signin
