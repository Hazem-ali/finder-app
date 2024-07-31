import inputStyles from '@/styles/global/input.module.css';
const Textarea = ({ changeHandler, ...rest }) => {
  return (
    <textarea
      {...rest}
      
      maxlength="1000"
      className={`${inputStyles.input} h-20 max-h-40`}
      onChange={(event) => changeHandler(event.target.value)}
    />
  );
};

export default Textarea;