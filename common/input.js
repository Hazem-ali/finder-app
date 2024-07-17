'use client'
import inputStyles from '@/styles/global/input.module.css';
const Input = ({ changeHandler, ...rest }) => {
  return (
    <input
      {...rest}
      className={inputStyles.input}
      onChange={(event) => changeHandler(event.target.value)}
    />
  );
};

export default Input;
