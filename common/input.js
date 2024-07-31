import inputStyles from "@/styles/global/input.module.css";
import Message from "./message";
const Input = ({ changeHandler, error, ...rest }) => {
  return (
    <div className="flex flex-col items-start">
      <input
        {...rest}
        className={`${inputStyles.input} ${error && "border-red-400"}`}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {error && <Message type="error">{error}</Message>}
    </div>
  );
};

export default Input;
