import React, { useState } from 'react';
import homeStyles from '../styles/home.module.scss';
import Test from './Test';

const Home: React.FC = () => {
  const [showTest, setShowTest] = useState<boolean>(false);

  const handleStartTest = (): void => {
    setShowTest(true);
  };

  return (
    <>
      {!showTest ? (
        <>
          <h1>Welcome to TypoRecs</h1>
          <div className={homeStyles.intro}>
            <h2>Take this test to get recommended movies based on your personality</h2>
            <button className={homeStyles.button} onClick={handleStartTest} aria-label="Start Test">Start Test</button>
          </div>
        </>
      ) : (
        <Test />
      )}
    </>
  );
};

export default Home;


