import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./TableBody";
import PropTypes from "prop-types";

const Table = ({ onSort, selectedSort, colums, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, colums }} />
                    <TableBody {...{ colums, data }} />
                </>
            )}
        </table>
    );
};
Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    colums: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};
export default Table;
