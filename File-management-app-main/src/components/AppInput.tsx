import {ComponentProps} from "react";

interface AppInputProps extends ComponentProps<"input"> {
  type: string;
  placeholder: string;
  className: string;
  icon_class?: string;
  name?: string;
  realValue?: string | number;
  onChange: any;
  readOnly?: boolean
}
function AppInput({
  type,
  placeholder,
  className,
  icon_class,
  name,
  realValue,
  onChange,
  readOnly=false,
  ...rest
}: AppInputProps) {
  return (
    <div className={className}>
      {icon_class && <i className={icon_class}></i>}
      <input
        type={type}
        placeholder={placeholder}
        className={"form-control"}
        name={name}
        value={realValue}
        onChange={onChange}
        readOnly={readOnly}
        {...rest}
      />
    </div>
  );
}

export default AppInput;
