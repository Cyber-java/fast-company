import React, { useState } from "react";
import Users from "./components/users";
import SeachStatus from "./components/seachStatus";
import API from "./api";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const toogleBookMark = (id) => {};
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Рейтинг</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Users key={user._id} {...user} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
