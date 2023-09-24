import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {};
  const handlePharse = (number) => {};
  return <></>;
};

export default Users;
