import styles from './Button.module.scss';

const Button = ({ action, active, children }) => {

  const handleAction = e => {
    e.preventDefault();

    console.log(children, active);

    if (children === 'START') {
      if (active) {
        action();
      } 
    } else if (children === 'RESET') {
      if (!active) {
        action();
      }
    } else {
      action();
    }
    
  };

  return (
    <button className={ styles.button } onClick={ handleAction } >
      { children }
    </button>
  );
};

export default Button;