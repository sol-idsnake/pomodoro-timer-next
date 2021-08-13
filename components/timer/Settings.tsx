import React, { useEffect, useState } from 'react';

const Settings = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) {
      const firstButton = document.querySelector('.settings button');

      setSelected(firstButton);
    }
  }, [selected]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const clickWhileRunning = isRunning || false;

    if (clickWhileRunning) {
      setError('Timer is running. Are you sure you want to switch?');
    }

    setIsSetTo(target.name);
    setSelected(target);
  };

  const buttons = [
    { name: 'pomodoro', proper: 'Pomodoro' },
    { name: 'short-break', proper: 'Short Break' },
    { name: 'long-break', proper: 'Long Break' },
  ];

  return (
    <div className="settings">
      {buttons.map((button) => {
        const classes = selected && selected.name === button.name ? 'active' : null;

        return (
          <button
            key={`setting-button-${button.name}`}
            type="button"
            name={button.name}
            className={classes}
            onClick={handleClick}
          >
            {button.proper}
          </button>
        );
      })}
    </div>
  );
};

export default Settings;
