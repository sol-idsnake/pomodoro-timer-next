import useTimer from '../../lib/timerHooks';

const Error = () => {
  const { errorMsg } = useTimer();
  return <div>{errorMsg}</div>;
};

export default Error;
