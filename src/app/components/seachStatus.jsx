import React from "react";

const SeachStatus = ({ length }) => {
  const renderPharse = (number) => {
    const lastone = Number(number.toString().slice(-1));

    console.log(number.toString());
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastone) >= 0) return "человека тусанут";
    if (lastone === 1) return "человек туснет";
    return "человек тусанет";
  };
  return (
    <>
      <h2>
        <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
          {length > 0
            ? `${length + " " + renderPharse(length)} c тобой сегодня`
            : "Никто не тусанет с тобой сегодня"}
        </span>
      </h2>
    </>
  );
};

export default SeachStatus;
