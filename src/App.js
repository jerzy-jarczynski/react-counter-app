import { useState, useEffect } from 'react';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import styles from './App.module.scss';

const App = () => {

  // const [time, setTime] = useState(0);
  // const [diff, setDiff] = useState(0);
  // const [lastDiff, setLastDiff] = useState(0);
  // const [running, setRunning] = useState(false);
  const [meantime, setMeantime] = useState(null);

  const [state, setState] = useState({ time: 0, diff: 0, lastDiff: 0, running: false });

  const startCounter = () => {
    // setTime(
    //   new Date().getTime()
    // );
    // setLastDiff(
    //   prevValue => prevValue + diff
    // );
    // setRunning(true);

    setState({ 
      ...state,
      time: new Date().getTime(),
      running: true
    });
  };

  const stopCounter = () => {
    // setRunning(false);

    setState({
      ...state,
      running: false,
      lastDiff: state.lastDiff + state.diff
    });

    clearInterval(meantime);
  };

  const resetCounter = () => {
    // setTime(0);
    // setDiff(0);
    // setLastDiff(0);

    setState({
      ...state,
      time: 0,
      diff: 0,
      lastDiff: 0
    });
  };

  const clockTick = () => {
    console.log('abc', state.time, state.diff, state.lastDiff, state.running );
    // setDiff (
    //   new Date().getTime() - time
    // );

    setState({
      ...state,
      diff: new Date().getTime() - state.time
    });
  };

  useEffect(() => {

    if (state.running) {
      setMeantime(
        setInterval(clockTick, 1000)
      );
    }

    return () => clearInterval(meantime);

  }, [state.running]);

  return (
    <div className={styles.app}>
      <Counter time={state.diff + state.lastDiff} />
      <div className={styles.buttons}>
        <Button action={startCounter} active={!state.running} >
          START
        </Button>
        <Button action={stopCounter} active={state.running}>
          STOP
        </Button>
        <Button action={resetCounter} active={state.running}>
          RESET
        </Button>
      </div>
    </div>
  );
};

export default App;