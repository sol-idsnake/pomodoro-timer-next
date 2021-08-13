import React, { useEffect } from 'react';
import formatTime from '../../lib/formatTime';
// import siteConfig from '../../config';
import useTimer from '../../lib/timerHooks';

const Display = () => {
  const { errorMsg, isRunning, isPaused, seconds, handleStart, handlePause } = useTimer();

  useEffect(() => {
    console.log(seconds, 'seconds in Display');
  });

  return (
    <div className="display">
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

export default Display;
