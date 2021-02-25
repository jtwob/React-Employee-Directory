import React, { Component, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow/TableRow";

export default class Table extends Component {
  state = {
    users: [],
    sortedField: null,
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      const users = res.data.results;
      this.setState({ users: users });
    });
  }

  render() {
    let counter = 0;
    let sortedUsers = this.state.users;
    if (this.state.sortedField !== null) {
      sortedUsers.sort((usr1, usr2) => {
        if (
          this.state.sortedField === "first" ||
          this.state.sortedField === "last"
        ) {
          if (
            usr1.name[this.state.sortedField] <
            usr2.name[this.state.sortedField]
          ) {
            return -1;
          }
          if (
            usr1.name[this.state.sortedField] >
            usr2.name[this.state.sortedField]
          ) {
            return 1;
          }
          return 0;
        }
        if (usr1[this.state.sortedField] < usr2[this.state.sortedField]) {
          return -1;
        }
        if (usr1[this.state.sortedField] > usr2[this.state.sortedField]) {
          return 1;
        }
        return 0;
      });
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => this.setState({ sortedField: "id" })}
            >
              ID
            </th>
            <th
              scope="col"
              onClick={() => this.setState({ sortedField: "first" })}
            >
              First
            </th>
            <th
              scope="col"
              onClick={() => this.setState({ sortedField: "last" })}
            >
              Last
            </th>
            <th
              scope="col"
              onClick={() => this.setState({ sortedField: "email" })}
            >
              Email
            </th>
            <th
              scope="col"
              onClick={() => this.setState({ sortedField: "age" })}
            >
              Age
            </th>
            <th
              scope="col"
              onClick={() => this.setState({ sortedField: "gender" })}
            >
              Gender
            </th>
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
              age={data.dob.age}
              gender={data.gender}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
