import inputStyles from "@/styles/global/input.module.css";
import Message from "./message";
const Input = ({   error, ...rest }) => {
  return (
    <div className="flex flex-col items-start">
      <input
        className={`${inputStyles.input} ${error && "border-error"}`}
        {...rest}
      />
      {error && <Message type="error">{error}</Message>}
    </div>
  );
};

export default Input;
