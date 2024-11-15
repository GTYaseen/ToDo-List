import React from "react";
import { FaGripLines } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
  IoReorderTwoOutline,
  IoSearchOutline ,
  IoNotificationsOutline,
} from "react-icons/io5";
export const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 text-gray-400">
      <IoReorderTwoOutline className="text-3xl" />
      <div className="flex gap-4">
        <IoNotificationsOutline className="text-2xl" />
        <IoSearchOutline className="text-2xl" />
      </div>
    </div>
  );
};
