import React from 'react';
import useTimer from '../../lib/timerHooks';

const Controls = () => {
  const { errorMsg, isRunning, isPaused, seconds, handleStart, handlePause } = useTimer();

  console.log(seconds, 'seconds in Controls');

  return (
    <div className="controls">
      {isRunning ? (
        <input type="button" value="Stop" onClick={handlePause} />
      ) : (
        <input type="button" value="Start" onClick={handleStart} />
      )}
    </div>
  );
};

export default Controls;
