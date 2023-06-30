import { useRouter } from 'next/router'
import { useState } from 'react'

const Signin = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = (e) => {
    e.preventDefault()
    // burada validasyon ve diger islemler gerceklestirilebilir.

    // setEmail(email + 'username')
    // setPassword(password + '!password')
    router.push('/dashboard')
  }

  return (
    <div>
      <h1>Signin Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Signin</button>
    </div>
  )
}

export default Signin
