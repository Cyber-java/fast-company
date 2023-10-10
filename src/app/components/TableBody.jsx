import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const TableBody = ({ data, colums }) => {
    const renderContent = (item, column) => {
        if (colums[column].component) {
            const component = colums[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, colums[column].path);
    };
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(colums).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
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
