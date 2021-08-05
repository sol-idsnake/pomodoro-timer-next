import { useState } from 'react';
import Controls from './Controls';
import Display from './Display';
import Settings from './Settings';

const Index = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSetTo, setIsSetTo] = useState('pomodoro');

  return (
    <div className="timer">
      <Settings setIsSetTo={setIsSetTo} />
      <Display isRunning={isRunning} isSetTo={isSetTo} setIsRunning={setIsRunning} />
      <Controls state={{ isRunning, setIsRunning }} />
    </div>
  );
};

export default Index;
