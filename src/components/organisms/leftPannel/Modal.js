import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className=" flex w-screen fixed justify-center items-center">
      <div className="w-96 rounded-xl bg-slate-100 shadow-gray-800 flex flex-col p-6">
        <button
          className="flex justify-end bg-transparent border-none font-bold cursor-pointer"
          onClick={() => closeModal(false)}
        >
          X
        </button>
        <div className="inline-block text-center mt-3">
          Are you sure you want to buy?
        </div>
        <div className="flex justify-center items-center text-center font-bold">
          Share
        </div>
        <div className="flex justify-center items-center  ">
          <button className="w-36 h-11 m-3 border-none bg-blue-500 text-white rounded-md font-normal cursor-pointer">
            Buy
          </button>
          <button
            className="w-36 h-11 m-3 border-none bg-red-500 text-white rounded-md font-normal cursor-pointer"
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
