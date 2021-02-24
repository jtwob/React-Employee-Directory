import React from "react";

const TableRow = (props) => {
  console.log(props.id, props.firstName, props.lastName, props.email);
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default TableRow;