import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alert = ({ alert, children }) => {
  return (
    <div>
      {alert && (
        <div className="absolute top-4 right-2 text-white bg-[#9b5204] w-[20%] py-2 animate-ease-in-right-to-left overflow-hidden px-5 flex justify-between">
          <p className=" font-LexendDeca font-light">{children}</p>
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            style={{ color: "#ffffff" }}
          />
        </div>
      )}
    </div>
  );
};

export default Alert;
