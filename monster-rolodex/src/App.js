import React, { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/serach-box/search-box.component";
/**.
 *
 * purre function
 * return the exac same thing all the time
 * const pureFunc =(a,b)=>{return a+b}
 *
 * inpure function
 * lec c =4;
 * const pureFunc =(a,b)=>{return a+b+c }
 *
 * side effects
 * c = 3
 * const funcB = (a,b)=>{ c=a+b return a*B}
 * the c is updated ouside of whis scope, an the params are pase and update some thing
 *
 * se recomineda programar en programacion con funciones puras
 */

const App = () => {
  const [searchFiled, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = (event) => {
    const field = event.target.value.toLowerCase();
    setSearchField(field);
  };
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  } ,[])

  useEffect(()=>{
    const newfilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled);
    });

    setFilteredMonsters(newfilteredMonster);
  }, [monsters, searchFiled])


  return (
    <div className="App">
      <h1 className="app-title">Monster rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-b0x"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
