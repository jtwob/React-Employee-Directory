import React, { Component, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow/TableRow";
import Checkbox from "../Checkbox/Checkbox";

export default class Table extends Component {
  state = {
    users: [],
    sortedField: null,
    sortConfig: "d",
    toggle: false,
  };

  toggleCallback = (data) => {
    console.log(data);
    if (data === "true") {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  };

  ageToggle(num) {
    if (this.state.toggle) {
      return num < 65;
    } else {
      return num;
    }
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20").then((res) => {
      const users = res.data.results;
      this.setState({ users: users });
    });
  }

  render() {
    let counter = 0;
    let sortedUsers = this.state.users;
    if (this.state.sortedField !== null) {
      sortedUsers.sort((usr1, usr2) => {
        if (this.state.sortConfig === "d") {
          if (this.state.sortedField === "age") {
            if (
              usr1.dob[this.state.sortedField] <
              usr2.dob[this.state.sortedField]
            ) {
              return -1;
            }
            if (
              usr1.dob[this.state.sortedField] >
              usr2.dob[this.state.sortedField]
            ) {
              return 1;
            }
            return 0;
          }
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
        }
        if (this.state.sortConfig === "a") {
          if (this.state.sortedField === "age") {
            if (
              usr1.dob[this.state.sortedField] <
              usr2.dob[this.state.sortedField]
            ) {
              return 1;
            }
            if (
              usr1.dob[this.state.sortedField] >
              usr2.dob[this.state.sortedField]
            ) {
              return -1;
            }
            return 0;
          }
          if (
            this.state.sortedField === "first" ||
            this.state.sortedField === "last"
          ) {
            if (
              usr1.name[this.state.sortedField] <
              usr2.name[this.state.sortedField]
            ) {
              return 1;
            }
            if (
              usr1.name[this.state.sortedField] >
              usr2.name[this.state.sortedField]
            ) {
              return -1;
            }
            return 0;
          }
          if (usr1[this.state.sortedField] < usr2[this.state.sortedField]) {
            return 1;
          }
          if (usr1[this.state.sortedField] > usr2[this.state.sortedField]) {
            return -1;
          }
          return 0;
        }
      });
    }

    return (
      <>
        <Checkbox callbackFromTable={this.toggleCallback} />
        <table className="table">
          <thead>
            <tr>
              <th
                scope="col"
                onClick={() => {
                  this.setState({ sortedField: "first" });
                  this.setState(
                    this.state.sortConfig === "a"
                      ? { sortConfig: "d" }
                      : { sortConfig: "a" }
                  );
                }}
              >
                First
              </th>
              <th
                scope="col"
                onClick={() => {
                  this.setState({ sortedField: "last" });
                  this.setState(
                    this.state.sortConfig === "a"
                      ? { sortConfig: "d" }
                      : { sortConfig: "a" }
                  );
                }}
              >
                Last
              </th>
              <th
                scope="col"
                onClick={() => {
                  this.setState({ sortedField: "email" });
                  this.setState(
                    this.state.sortConfig === "a"
                      ? { sortConfig: "d" }
                      : { sortConfig: "a" }
                  );
                }}
              >
                Email
              </th>
              <th
                scope="col"
                onClick={() => {
                  this.setState({ sortedField: "age" });
                  this.setState(
                    this.state.sortConfig === "a"
                      ? { sortConfig: "d" }
                      : { sortConfig: "a" }
                  );
                }}
              >
                Age
              </th>
              <th
                scope="col"
                onClick={() => {
                  this.setState({ sortedField: "gender" });
                  this.setState(
                    this.state.sortConfig === "a"
                      ? { sortConfig: "d" }
                      : { sortConfig: "a" }
                  );
                }}
              >
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users
              .filter((e) => this.ageToggle(e.dob.age))
              .map((data) => (
                <TableRow
                  key={counter++}
                  firstName={data.name.first}
                  lastName={data.name.last}
                  email={data.email}
                  age={data.dob.age}
                  gender={data.gender}
                />
              ))}
          </tbody>
        </table>
      </>
    );
  }
}
