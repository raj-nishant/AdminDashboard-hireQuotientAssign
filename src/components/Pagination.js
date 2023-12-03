import React from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPaginationButtons = () => {
    const pageButtons = [];

    pageButtons.push(
      <button
        key="first"
        onClick={() => handlePagination(1)}
        className={`bg-blue-500 text-white px-4 py-2 rounded-l ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="previous"
        onClick={() => handlePagination(currentPage - 1)}
        className={`bg-blue-500 text-white px-4 py-2 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );

    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={`bg-blue-500 text-white px-4 py-2 ${
            currentPage === page ? "font-bold" : ""
          }`}
        >
          {page}
        </button>
      );
    }

    pageButtons.push(
      <button
        key="next"
        onClick={() => handlePagination(currentPage + 1)}
        className={`bg-blue-500 text-white px-4 py-2 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="last"
        onClick={() => handlePagination(totalPages)}
        className={`bg-blue-500 text-white px-4 py-2 rounded-r ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    );

    return pageButtons;
  };

  return (
    <div className="flex justify-center mt-4">{renderPaginationButtons()}</div>
  );
};

export default Pagination;
