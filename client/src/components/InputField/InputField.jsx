import React from "react";

const InputField = ({
  label,
  id,
  inputClass,
  labelClass,
  name,
  handleChange,
  type,
  containerClass,
}) => {
  return (
    <div
      className={`flex flex-col text-left gap-1 font-Roboto pt-3 ${containerClass}`}
    >
      <label className={`text-sm ps-1 text-[#9b5204] ${labelClass}`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        className={`border border-[#eccfaf] rounded-sm py-2 px-2 hover:border-[#e2aa6e] focus:outline-[#e2aa6e] ${inputClass}`}
      />
    </div>
  );
};

export default InputField;
