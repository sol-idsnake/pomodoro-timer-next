import { useEffect, useRef, useState } from 'react';

const useTimer = () => {
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(1500000);
  const counterRef = useRef(0);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);

    counterRef.current = window.setInterval(() => {
      setSeconds((prevState) => prevState - 1000);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(counterRef.current);
    setIsRunning(false);
    setIsPaused(true);
  };

  return {
    errorMsg,
    isRunning,
    isPaused,
    seconds,
    handleStart,
    handlePause,
  };
};

export default useTimer;
