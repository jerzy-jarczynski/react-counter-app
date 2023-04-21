import { useState, useEffect } from 'react';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import styles from './App.module.scss';

const App = () => {

  const [time, setTime] = useState(0);
  const [diff, setDiff] = useState(0);
  const [lastDiff, setLastDiff] = useState(0);
  const [running, setRunning] = useState(false);
  const [meantime, setMeantime] = useState(null);

  const startCounter = () => {
    setTime(
      new Date().getTime()
    );
    setLastDiff(
      prevValue => prevValue + diff
    );
    setRunning(true);
  };

  const stopCounter = () => {
    setRunning(false);
  };

  const resetCounter = () => {
    setTime(0);
    setDiff(0);
    setLastDiff(0);
  };

  const clockTick = () => {
    setDiff (
      new Date().getTime() - time
    );
  };

  useEffect(() => {

    if (running) {
      setMeantime(
        setInterval(clockTick, 42)
      );
    } else {
      clearInterval(meantime);
    }

    return () => clearInterval(meantime);

  }, [running]);

  return (
    <div className={styles.app}>
      <Counter time={diff + lastDiff} />
      <div className={styles.buttons}>
        <Button action={startCounter} active={!running} >
          START
        </Button>
        <Button action={stopCounter} active={running}>
          STOP
        </Button>
        <Button action={resetCounter} active={running}>
          RESET
        </Button>
      </div>
    </div>
  );
};

export default App;