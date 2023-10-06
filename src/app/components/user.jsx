import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToogleBookmark
}) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    {qualities.map((qual) => (
                        <Qualitie key={qual._id} {...qual} />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}/5</td>
                <td>
                    <BookMark
                        status={bookmark}
                        onClick={() => onToogleBookmark(_id)}
                    />
                </td>
                <td>
                    <button
                        className="btn btn-danger m-2"
                        onClick={() => onDelete(_id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
    onToogleBookmark: PropTypes.func
};
export default User;
