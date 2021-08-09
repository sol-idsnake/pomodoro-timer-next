import { useState } from 'react';
import Controls from './Controls';
import Display from './Display';
import Error from './Error';
import Settings from './Settings';

const Index = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSetTo, setIsSetTo] = useState('pomodoro');
  const [error, setError] = useState('');

  return (
    <div className="timer">
      <Settings setIsSetTo={setIsSetTo} isRunning={isRunning} setError={setError} />
      <Error error={error} />
      <Display isRunning={isRunning} isSetTo={isSetTo} setIsRunning={setIsRunning} />
      <Controls state={{ isRunning, setIsRunning }} />
    </div>
  );
};

export default Index;
