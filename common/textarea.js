import inputStyles from "@/styles/global/input.module.css";
import Message from "./message";
const Textarea = ({ changeHandler, error, ...rest }) => {
  return (
    <div className="flex flex-col items-start">
      <textarea
        {...rest}
        maxlength="1000"
        className={`${inputStyles.input} h-20 max-h-40`}
        onChange={(event) => changeHandler(event.target.value)}
      />
      {error && <Message type="error">{error}</Message>}
    </div>
  );
};

export default Textarea;
