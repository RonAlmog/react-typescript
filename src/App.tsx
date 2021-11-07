import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [age, setAge] = useState<number>(30);

  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }
  const [people, setPeople] = useState<IState["people"]>();

  const changeAge = () => {
    setAge(77);
    console.log("age is ", age);
  };
  return (
    <div className="App">
      <h1>People invited to our party</h1>
    </div>
  );
}

export default App;
