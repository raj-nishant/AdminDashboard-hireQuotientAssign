import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

const useApi = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Return the state and functions
  return {
    filteredUsers,
    setFilteredUsers,
    users,
    setUsers,
    fetchUsers,
  };
};

export default useApi;
