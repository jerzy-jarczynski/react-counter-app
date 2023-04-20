import styles from './Button.module.scss';

const Button = ({ action, children }) => {

  const handleAction = e => {
    e.preventDefault();
    action();
  };

  return (
    <button className={ styles.button } onClick={ handleAction }>
      { children }
    </button>
  );
};

export default Button;