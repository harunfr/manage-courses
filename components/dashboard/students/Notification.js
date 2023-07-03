import React, { useEffect } from 'react'

function Notification({ message, duration, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div className="fixed bottom-0 right-3 animate-bounce rounded-lg bg-green-500 p-4 text-white shadow-lg">
      {message}
    </div>
  )
}

export default Notification
