import React, { useEffect, useRef, useState } from 'react';
import formatTimer from '../../lib/formatTime';
import siteConfig from '../../config';

interface DisplayProps {
  isRunning: boolean;
  isSetTo: string;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Display = ({ isRunning, isSetTo, setIsRunning }: DisplayProps) => {
  const [selected, setSelected] = useState<string | null>('pomodoro');
  const [timeLeft, setTimeLeft] = useState<number | null>(
    siteConfig.timerSettings.pomodoro.duration
  );
  const time = useRef(null);

  const handleStart = () => {
    time.current = setInterval(() => {
      setTimeLeft((prevState) => prevState - 1000);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(time.current);
    setIsRunning(false);
  };

  const handleSettingChange = () => {
    clearInterval(time.current);

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

    setSelected(isSetTo);
  };

  useEffect(() => {
    // timer functions
    if (isRunning) {
      handleStart();
    } else {
      handleStop();
    }

    // handle setting change
    if (selected !== isSetTo) {
      setIsRunning(false);
      handleSettingChange();
    }

    return () => {
      clearInterval(time.current);
    };
  });

  return (
    <div className="display">
      <span>{formatTimer(timeLeft)}</span>
    </div>
  );
};

export default Display;
