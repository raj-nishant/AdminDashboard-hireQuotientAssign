import React from "react";

const DeleteSelectedButton = ({ handleDeleteSelected, selectedRows }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-[85%]"
      onClick={handleDeleteSelected}
      disabled={selectedRows.length === 0}
    >
      Delete Selected
    </button>
  );
};

export default DeleteSelectedButton;
