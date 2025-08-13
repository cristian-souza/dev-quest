import { useEffect, useState } from "react"

export function useOnlineStatus() {
     const [isOnline, setIsonline] = useState(true)

    useEffect(() => {
        function handleOnLine() {
            setIsonline(true)
        }

        function handleOffLine() {
            setIsonline(false)
        }

        window.addEventListener('online', handleOnLine)
        window.addEventListener('offline', handleOffLine)
        return () => {
            window.removeEventListener('online', handleOnLine)
            window.removeEventListener('offline', handleOffLine)
        }
    }, [])

    return isOnline
}