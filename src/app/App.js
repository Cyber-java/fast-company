import React, { useState } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const toogleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <div>
            <Users
                onDelete={handleDelete}
                onToogleBookmark={toogleBookMark}
                users={users}
            ></Users>
        </div>
    );
}
export default App;
