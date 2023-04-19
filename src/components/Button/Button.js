import styles from './Button.module.scss';

const Button = ({ action, time, children }) => {

  const handleAction = e => {
    e.preventDefault();
    action(time);
  };

  return (
    <button className={ styles.button } onClick={ handleAction } >
      { children }
    </button>
  );
};

export default Button;