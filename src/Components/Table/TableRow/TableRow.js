import React from "react";

const TableRow = (props) => {
  // console.log(props.id, props.firstName, props.lastName, props.email);
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
      <td>{props.gender}</td>
    </tr>
  );
};

export default TableRow;
