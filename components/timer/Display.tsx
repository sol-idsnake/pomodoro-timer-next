import React, { useEffect, useRef, useState } from 'react';
import formatTimer from '../../lib/formatTime';
import siteConfig from '../../config';

interface DisplayProps {
  isRunning: boolean;
  isSetTo: string;
}

const Display = (props: DisplayProps) => {
  const { isRunning, isSetTo } = props;
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const time = useRef(null);

  useEffect(() => {
    if (timeLeft === null) {
      switch (isSetTo) {
        case 'short-break':
          setTimeLeft(siteConfig.timerSettings.shortBreak.duration);
          break;
        case 'long-break':
          setTimeLeft(siteConfig.timerSettings.longBreak.duration);
          break;
        default:
          setTimeLeft(siteConfig.timerSettings.pomodoro.duration);
          break;
      }
    }

    if (timeLeft > 0 && isRunning) {
      time.current = setTimeout(() => {
        setTimeLeft((prevState) => prevState - 1000);
      }, 1000);
    }

    return () => clearTimeout(time.current);
  }, [timeLeft, isRunning, isSetTo]);

  return (
    <div className="display">
      <span>{formatTimer(timeLeft)}</span>
    </div>
  );
};

export default Display;
