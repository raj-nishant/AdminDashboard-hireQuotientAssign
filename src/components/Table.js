import React from "react";
import TableRow from "./TableRow";

const Table = ({
  users,
  selectedRows,
  handleRowSelection,
  handleDelete,
  handleSelectAllRows,
}) => {
  return (
    <table className="min-w-full bg-white border rounded shadow overflow-hidden">
      <thead>
        <tr className="bg-gray-300">
          <th className="py-3 px-4">
            <input
              type="checkbox"
              checked={selectedRows.length === users.length}
              onChange={handleSelectAllRows}
            />
          </th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            user={user}
            selected={selectedRows.includes(user.id)}
            handleRowSelection={handleRowSelection}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
