import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th onClick={() => handleSort("name")} scope="col">
                    Имя
                </th>
                <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">
                    Профессия
                </th>

                <th onClick={() => handleSort("completedMeetings")} scope="col">
                    Встретился,раз
                </th>
                <th onClick={() => handleSort("rate")} scope="col">
                    Рейтинг
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    Избранное
                </th>
                <th />
            </tr>
        </thead>
    );
};

export default TableHeader;
