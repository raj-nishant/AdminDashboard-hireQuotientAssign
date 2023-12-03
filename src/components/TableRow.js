import React, { useState } from "react";

const TableRow = ({ user, selected, handleRowSelection, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved:", editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <tr className={selected ? "bg-gray-200" : "hover:bg-gray-100 transition"}>
      <td className="p-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={(event) => handleRowSelection(event, user.id)}
        />
      </td>
      <td className="p-2">{user.id}</td>
      {isEditing ? (
        <>
          <td className="p-2">
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              name="role"
              value={editedUser.role}
              onChange={handleChange}
            />
          </td>
          <td className="btn-container p-2">
            <button onClick={handleSave} className="text-green-500">
              Save
            </button>
            <button onClick={handleCancel} className="text-gray-500 ml-2">
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="p-2">{user.name}</td>
          <td className="p-2">{user.email}</td>
          <td className="p-2">{user.role}</td>
          <td className="btn-container p-2">
            <button
              onClick={() => {
                setIsEditing(true);
                setEditedUser({ ...user });
              }}
              className="text-blue-500 hover:text-blue-700 mr-2"
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-700"
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
