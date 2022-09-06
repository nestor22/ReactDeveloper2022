import { Component } from "react";

import CardList from './components/card-list/card-list.component'

import "./App.css";
import SearchBox from "./components/serach-box/search-box.component";

class App extends Component {
  constructor() {
    console.log('component constructor')
    super();

    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    console.log('component mount')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          
        )
      );
  }
  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLowerCase();

    this.setState(
      () => {
        return { searchFiled };
      }
    );
  }

  render() {
    console.log('render')

    const {monsters, searchFiled} = this.state
    const { onSearchChange } = this

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled);
    });

    return (
      <div className="App">
        
        <SearchBox onChangeHandler={onSearchChange} placeholder = "search monsters" className = 'search-b0x'/>
        <CardList monsters = {filteredMonster}/>
      </div>
    );
  }
}

export default App;
