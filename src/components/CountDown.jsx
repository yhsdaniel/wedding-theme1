import React from 'react'
import useCountDown from '../components/useCountDown'

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div className='container-time'>
                <div className='box'>
                    <span>{days}</span>
                    <span className='text-xs'>Days</span>
                </div>
            </div>
            <div className='container-time'>
                <div className='box'>
                    <span>{hours}</span>
                    <span className='text-xs'>Hours</span>
                </div>
            </div>
            <div className='container-time'>
                <div className='box'>
                    <span>{minutes}</span>
                    <span className='text-xs'>Minutes</span>
                </div>
            </div>
            <div className='container-time'>
                <div className='box'>
                    <span>{seconds}</span>
                    <span className='text-xs'>Seconds</span>
                </div>
            </div>
        </div>
    )
}

export default function CountDown({ targetDate }) {
    const [days, hours, minutes, seconds] = useCountDown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return (
            <ShowCounter
                days={0}
                hours={0}
                minutes={0}
                seconds={0}

            />
        )
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
}
