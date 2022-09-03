import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Nestor", lastName: "Gonzalez" },
      company: "GUA",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi { this.state.name.firstName } { this.state.name.lastName }  and live in {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(()=>{ // se puede enviar state, props his.setState((state, props)
                return{ name: { firstName: "Pablo", lastName: "Lopez" } }
              }, ()=>{// este es el callback que se ejecuta inmeditamente despues con la informacion de state de arriba
                console.log(this.state);
              });
            }}
          >
            change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
