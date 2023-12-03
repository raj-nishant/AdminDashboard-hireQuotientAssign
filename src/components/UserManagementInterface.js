import React, { useState, useEffect } from "react";
import "../styles/style.css";
import useApi from "../utils/useApi";
import { toast } from "react-toastify";
import Table from "./Table";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import DeleteSelectedButton from "./DeleteSelectedButton";

const UserManagementInterface = () => {
  const { filteredUsers, setFilteredUsers, users, setUsers } = useApi();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const itemsPerPage = 10;

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter(
      (user) =>
        user.id.toLowerCase().includes(query) ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
    setCurrentPage(1);
  };

  const handleEdit = (id) => {
    const rowToEdit = filteredUsers.find((user) => user.id === id);
  };

  const handleDelete = (id) => {
    if (!selectedRows.includes(id)) {
      toast.error("Please select the row to delete.");
      return;
    }

    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.id !== id)
    );

    toast.error("Deleted Successfully!");
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleSelectAllRows = (event) => {
    const { checked } = event.target;
    const allRowIds = currentUsers.map((user) => user.id); // Use currentUsers instead of filteredUsers

    if (checked && selectedRows.length !== allRowIds.length) {
      setSelectedRows(allRowIds);
      toast.warn("Hey You Selected All !", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (event, id) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
      // toast.success('Selected');
      toast.success("Selected", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(
      (user) => !selectedRows.includes(user.id)
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows([]);
    toast.error("Selected rows deleted successfully");
  };

  // Calculate the current page's subset of users
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="container">
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      <Table
        users={currentUsers}
        selectedRows={selectedRows}
        handleRowSelection={handleRowSelection}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSelectAllRows={handleSelectAllRows}
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredUsers.length}
        handlePagination={handlePagination}
      />
      <DeleteSelectedButton
        handleDeleteSelected={handleDeleteSelected}
        selectedRows={selectedRows}
      />
    </div>
  );
};

export default UserManagementInterface;
