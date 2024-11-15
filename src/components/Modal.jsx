import React from "react";
import { IoCloseOutline } from "react-icons/io5";
export const Modal = ({ children, onClose, isOpen }) => {
  return (
    <div className="transition-all duration-300">
      <div
        className={`fixed inset-0 bg-black bg-opacity-25 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed ${
          isOpen ? "bottom-0" : "bottom-[-650px]"
        } left-0 right-0 transition-all duration-300`}
      >
        <div className="bg-white p-2 rounded shadow h-[650px] w-full">
          <div className="flex justify-end items-end gap-2">
            <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={onClose}>
              <IoCloseOutline className="text-2xl" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
