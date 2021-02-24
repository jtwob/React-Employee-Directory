import React from "react";

const Table = (props) => {
  console.log(props.users);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.users.forEach((user) => {
          console.log(user.name.first);
          return (
            <tr>
              <th scope="row">{user.key}</th>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
