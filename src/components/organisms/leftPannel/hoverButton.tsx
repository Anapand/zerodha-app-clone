import React, { useState } from "react";

import Modal from "./Modal";
import NestedMore from "./NestedMore";
import { AiOutlineMenuUnfold, AiOutlineDelete } from "react-icons/ai";
import { MdShowChart } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

interface IProps {}

const HoverButton: React.FC<IProps> = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [detail, setDetail] = useState<any>(null);
  return (
    <div className="flex content-end">
      <button
        className="bg-blue-500 text-white mx-0.5 rounded-md w-8 h-8 hover:bg-blue-400"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        B
      </button>
      <button
        className="bg-red-500 text-white mx-0.5 rounded-md w-8 h-8 hover:bg-red-300"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        S
      </button>

      <button className="bg-gray-400 text-white mx-0.5 rounded-md w-8 h-8 p-2 hover:bg-gray-300">
        <AiOutlineMenuUnfold />
      </button>
      <button className="bg-gray-400 text-white mx-0.5 rounded-md w-8 h-8 p-2 hover:bg-gray-300">
        <MdShowChart />
      </button>
      <button className="bg-gray-400 text-white mx-0.5 rounded-md w-8 h-8 p-2 hover:bg-gray-300">
        <AiOutlineDelete />
      </button>
      <button
        className="bg-gray-400 text-white mx-0.5 rounded-md w-8 h-8 p-2 hover:bg-gray-300"
        onClick={() => setDetail(<NestedMore />)}
      >
        <FiMoreHorizontal />
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
      {detail && <NestedMore />}
    </div>
  );
};

export default HoverButton;
