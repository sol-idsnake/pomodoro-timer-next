import React, { useEffect, useState } from 'react';

const Settings = ({ setIsSetTo }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) {
      const firstButton = document.querySelector('.settings button');

      setSelected(firstButton);
    }
  }, [selected]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;

    setIsSetTo(target.name);
    setSelected(target);
  };

  return (
    <div className="settings">
      <button
        key="701"
        name="pomodoro"
        onClick={handleClick}
        type="button"
        className={selected && selected.name === 'pomodoro' ? 'active' : null}
      >
        Pomodoro
      </button>
      <button
        key="802"
        name="short-break"
        onClick={handleClick}
        type="button"
        className={selected && selected.name === 'short-break' ? 'active' : null}
      >
        Short Break
      </button>
      <button
        key="903"
        name="long-break"
        onClick={handleClick}
        type="button"
        className={selected && selected.name === 'long-break' ? 'active' : null}
      >
        Long Break
      </button>
    </div>
  );
};

export default Settings;
