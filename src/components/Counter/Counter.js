import styles from './Counter.module.scss';

const Counter = ({ time }) => {

  const formatTime = (miliseconds) => {
    let seconds = Math.floor(miliseconds / 1000);
    
    const hours = parseInt( seconds / 3600 );
    seconds %= 3600;

    const minutes = parseInt( seconds / 60 );
    seconds %= 60;

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return `${ zeroPad(hours, 2) }:${ zeroPad(minutes, 2) }:${ zeroPad(seconds, 2) }.${ miliseconds % 1000 }`;
  };

  return (
    <h1 className={ styles.counter }>{ formatTime(time) }</h1>
  );
};

export default Counter;