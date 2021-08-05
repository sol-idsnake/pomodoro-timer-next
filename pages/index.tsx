import React from 'react';
// import { Helmet } from 'react-helmet';
import Timer from '../components/timer';
import siteConfig from '../config';

console.clear();

// type IndexProps = typeof siteConfig;

const IndexPage = () => {
  return (
    <main>
      {/* <Helmet
        title={
          timer.duration === timerSettings.pomodoro.duration
            ? 'Pomodoro system online'
            : `${formatTimer(timer.duration)} - Focus Time!`
        }
      /> */}

      <Timer />
    </main>
  );
};

IndexPage.defaultProps = siteConfig;

export default IndexPage;
