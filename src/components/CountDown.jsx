import { useEffect, useState } from "react";
const padZero = (num) => (num < 10 ? `0${num}` : num);
export default function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        const target = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const difference = target - now;
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);
    return (<div className="flex sm:gap-40 gap-20 mb-20">
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-semibold dark:text-white">
          {padZero(timeLeft.days)}
        </span>
        <span className="dark:text-white">Days</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-semibold dark:text-white">
          {padZero(timeLeft.hours)}
        </span>
        <span className="dark:text-white">Hours</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-semibold dark:text-white">
          {padZero(timeLeft.minutes)}
        </span>
        <span className="dark:text-white">Minutes</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-semibold dark:text-white">
          {padZero(timeLeft.seconds)}
        </span>
        <span className="dark:text-white">Seconds</span>
      </div>
    </div>);
}
