const formatTimer = (time: number) => {
  if (time <= 0) {
    return `00:00`;
  }

  const rawMinutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const rawSeconds = Math.floor((time % (1000 * 60)) / 1000);

  const mins = rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes.toString();
  const secs = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds.toString();

  return `${mins}:${secs}`;
};

export default formatTimer;
