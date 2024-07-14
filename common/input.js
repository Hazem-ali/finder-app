'use client'

const Input = ({ changeHandler, ...rest }) => {
  return (
    <input
      {...rest}
      className="input"
      onChange={(event) => changeHandler(event.target.value)}
    />
  );
};

export default Input;
