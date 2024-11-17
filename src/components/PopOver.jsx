import React, { useRef, useEffect, useState } from "react";

const PopOver = ({ isOpen, anchorRef, children, onClose }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isOpen && anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Position below the element
        left: rect.left + window.scrollX, // Align horizontally
      });
    }
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={popoverRef}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
      className="bg-white shadow-lg rounded-lg p-4"
    >
      <div className="relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default PopOver;
