import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  // Sayfa yüklendiğinde kontrol et
  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/signin')
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
