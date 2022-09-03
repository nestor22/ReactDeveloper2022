import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLowerCase();

    this.setState(
      () => {
        return { searchFiled };
      },
      () => console.log(this.state)
    );
  }

  render() {

    const {monsters, searchFiled} = this.state
    const { onSearchChange } = this

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="serach monsters"
          onChange={onSearchChange}
        />
        {filteredMonster.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
