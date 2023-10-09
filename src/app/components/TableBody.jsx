import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const TableBody = ({ data, colums }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(colums).map((column) => (
                        <td key={column}>{_.get(item, colums[column].path)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    colums: PropTypes.object.isRequired
};
export default TableBody;
