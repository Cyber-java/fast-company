import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ onSort, selectedSort, colums }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(colums).map((column) => (
                    <th
                        key={column}
                        onClick={
                            colums[column].path
                                ? () => handleSort(colums[column].path)
                                : undefined
                        }
                        {...{ role: colums[column].path && "button" }}
                        scope="col"
                    >
                        {colums[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    colums: PropTypes.object.isRequired
};
export default TableHeader;
