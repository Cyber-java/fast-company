import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  console.log(props);
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
        <td>
          <button className="btn btn-danger m-2">Delete</button>
        </td>
      </tr>
    </>
  );
};
export default User;
