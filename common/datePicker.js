import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import inputStyles from "@/styles/global/input.module.css";
import Message from "./message";

const dateOnly = "Y-m-d";
const dateTime = "Y-m-d H:i";

const DatePicker = ({
  time = false,
   changeHandler,
  error,
  format,
  ...rest
}) => {
  const dateInputRef = useRef(null);

  const getFormattedDate = (date, format) => {
    return format ? flatpickr.formatDate(date[0], format) : date[0];
  };

  useEffect(() => {
    if (dateInputRef.current) {
      flatpickr(dateInputRef.current, {
        dateFormat: time ? dateTime : dateOnly,
        enableTime: time,
        disableMobile: true,
        onChange: (selectedDates) => {
          changeHandler(getFormattedDate(selectedDates, format));
        },
      });
    }
    return () => {
      if (dateInputRef.current) {
        dateInputRef.current._flatpickr.destroy();
      }
    };
  }, [time, format, changeHandler]);

  return (
    <div className="relative flex flex-col items-start">
      <input
        ref={dateInputRef}
        // onClick={handleClick}
        className={`${inputStyles.input} relative ${error && "border-error"}`}
        // type="text"
        {...rest}
      />
      {error && <Message type="error">{error}</Message>}
    </div>
  );
};

export default DatePicker;
