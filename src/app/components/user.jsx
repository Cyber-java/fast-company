import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>
          {props.qualities.map((qualitie) => (
            <span
              className={"badge m-1 bg-" + qualitie.color}
              key={qualitie._id}
            >
              {qualitie.name}
            </span>
          ))}
        </td>
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate}/5</td>
        <td></td>
        <td>
          <button
            className="btn btn-danger m-2"
            onClick={() => props.onDelete(props._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default User;
