import React from 'react';

interface ControlProps {
  state: {
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Controls = ({ state }: ControlProps) => {
  const { isRunning, setIsRunning } = state;

  const handleControlClick = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const cmd = event.currentTarget.value.toLowerCase();

    if (cmd === 'start') {
      setIsRunning(true);
    } else if (cmd === 'stop') {
      setIsRunning(false);
    }
  };

  return (
    <div className="controls">
      {isRunning ? (
        <input type="button" value="Stop" onClick={handleControlClick} />
      ) : (
        <input type="button" value="Start" onClick={handleControlClick} />
      )}
    </div>
  );
};

export default Controls;
