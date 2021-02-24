import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow/TableRow";

export default class Table extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      const users = res.data.results;
      this.setState({ users });
    });
  }

  render() {
    let counter = 0;
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
          {this.state.users.map((data) => (
            <TableRow
              id={counter++}
              key={counter}
              firstName={data.name.first}
              lastName={data.name.last}
              email={data.email}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
