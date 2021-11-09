import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [age, setAge] = useState<number>(30);

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "hohaha",
      url: "",
      age: 34,
      note: "kaka dada",
    },
  ]);

  const changeAge = () => {
    setAge(77);
    console.log("age is ", age);
  };
  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
