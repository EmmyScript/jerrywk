import { ComponentProps } from "react";

function AppSelect({ onChange, ...props }: { onChange: any } & ComponentProps<"select">) {
  return (
    <div className="custom-form-control">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={onChange}
        {...props}
      >
        <option defaultValue={"Sort"}>Sort</option>
        <option value="name">By name</option>
        <option value="date">By time created</option>
      </select>
    </div>
  );
}

export default AppSelect