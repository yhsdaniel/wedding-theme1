import { useEffect, useState } from "react";

const useCountDown = (targetDate) => {
    //DATE TARGET
    const countDownDate = new Date(targetDate).getTime()

    //NOW DATE
    
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())
    
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            setCountDown(countDownDate - now)
        }, 1000);

        return () => clearInterval(interval)
    }, [countDownDate])
    
    return getDateWedding(countDown)
}

const getDateWedding = (countdown) => {
    let days = Math.floor(countdown / (1000 * 60 * 60 * 24))
    let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((countdown % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds]
}

export default useCountDown