import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {};
  const handlePharse = (number) => {};

  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Рейтинг</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td key={user._id}>{user.name}</td>
                  <td>{user.qualities.map((qualitie) => qualitie.name)}</td>
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button className="btn btn-danger" onClick={handleDelete}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
