import React from "react";

const Button = ({
  className,
  onClick = () => {},
  children,
  containerClass,
  type,
}) => {
  return (
    <div className={`${containerClass}`}>
      <button
        className={`bg-[#9b5204] text-white font-Roboto font-medium text-lg px-5 py-2 rounded-md hover:bg-[#84582a] ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
