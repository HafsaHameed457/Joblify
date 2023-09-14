import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const Alert = ({
  alert,
  children,
  onClick,
  alertClass,
  alertText,
  alertCross,
}) => {
  return (
    <div>
      {alert && (
        <div
          className={`absolute top-4 right-2 text-white w-[20%] py-2 animate-ease-in-right-to-left overflow-hidden px-5 flex justify-between rounded-md ${alertClass} `}
        >
          <p className={`font-LexendDeca  ${alertText}`}>{children}</p>

          <div className=" cursor-pointer" onClick={onClick}>
            <CloseIcon className={alertCross} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
