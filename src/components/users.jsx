import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const renderPharse = (number) => {
    const lastone = Number(number.toString().slice(-1));
    console.log(lastone);
    console.log(number.toString());
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastone) >= 0) return "человека тусанут";
    if (lastone === 1) return "человек туснет";
    return "человек тусанет";
  };

  return (
    <>
      <h2>
        <span
          className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
        >
          {users.length > 0
            ? `${
                users.length + " " + renderPharse(users.length)
              } c тобой сегодня`
            : "Никто не тусанет с тобой сегодня"}
        </span>
      </h2>
      {users.length > 0 && (
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
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((qualitie) => (
                    <span
                      className={"badge m-1 bg-" + qualitie.color}
                      key={qualitie._id}
                    >
                      {qualitie.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
