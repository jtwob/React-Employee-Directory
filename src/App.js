import logo from "./logo.svg";
import "./App.css";
import Table from "./Components/Table/Table";
import axios from "axios";

function App() {
  const userArr = [];

  const getUsers = async function (numUsers) {
    for (let i = 0; i < numUsers; i++) {
      const res = await axios.get("https://randomuser.me/api/");
      let tempUser = {
        key: i,
        name: {
          first: res.data.results[0].name.first,
          last: res.data.results[0].name.last,
        },
        email: res.data.results[0].email,
      };
      userArr.push(tempUser);
    }
  };

  // console.log(userArr);
  // let testUsers = [
  //   {
  //     name: {
  //       first: "James",
  //       last: "Totah",
  //     },
  //     email: "jtotah@dons.usfca.edu",
  //   },
  //   {
  //     name: {
  //       first: "Ianna",
  //       last: "Totah",
  //     },
  //     email: "ianna.m.auld@gmail.com",
  //   },
  //   {
  //     name: {
  //       first: "Bean",
  //       last: "Totah",
  //     },
  //     email: "dog@gmail.com",
  //   },
  // ];

  let num = 5;
  getUsers(num);
  return (
    <div className="App">
      <Table users={userArr} />
    </div>
  );
}

export default App;
