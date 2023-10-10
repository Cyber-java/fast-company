import React from "react";
import PropTypes from "prop-types";

import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToogleBookmark,
    onDelete,
    ...rest
}) => {
    const colums = {
        name: { path: "name", name: "Имя" },
        qualitie: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Рейтинг" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToogleBookmark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger m-2"
                    onClick={() => onDelete(user._id)}
                >
                    Delete
                </button>
            )
        }
    };
    return (
        <>
            <Table
                onSort={onSort}
                selectedSort={selectedSort}
                colums={colums}
                data={users}
            ></Table>
        </>
    );
};
UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToogleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default UserTable;
