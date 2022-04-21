import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import userEvent from "@testing-library/user-event";
import Picture from "../src/content/background2.PNG";
import statFront from "../src/content/statbar_front_empty.jpg";
import statBack from "../src/content/statbar_back_empty.jpg";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const App = () => {
  const [pokemaan, setPokemaan] = useState("");
  const [pokemaan2, setPokemaan2] = useState("");
  const [pokemaan3, setPokemaan3] = useState("");
  const [level, setLevel] = useState("");
  const [level2, setLevel2] = useState("");
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  let pokemon2 = "";

  useEffect(() => {
    console.log("before" + pokemon2);
    if (typeof pokemaan2 !== undefined && pokemaan2.stats != null) {
      pokemon2 = pokemaan2?.stats[0]?.base_stat;
      console.log("after" + pokemon2);
      setPokemaan3(pokemon2);
    }
  }, [pokemaan2]);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 5,
  //     titel: "boodschappen",
  //     gedaan: true,
  //   },
  //   {
  //     id: 6,
  //     titel: "opruimen",
  //     gedaan: false,
  //   },
  // ]);

  // const addTodo = (e) => {
  //   e.preventDefault();

  //   const newTodo = {
  //     id: Math.floor(Math.random() * 1000),
  //     titel: value,
  //     gedaan: false,
  //   };

  //   setValue("");
  //   setTodos([...todos, newTodo]);
  // };

  // const updateTodo = (id) => {
  //   const newTodos = todos.filter((todo) => {
  //     if (todo.id === id) {
  //       todo.gedaan = !todo.gedaan;
  //     }
  //     return todo;
  //   });

  //   setTodos([newTodos]);
  // };

  // const deleteTodo = (id) => {
  //   console.log(id);
  //   const newTodos = todos.filter((todo) => todo.id !== id);

  //   setTodos([newTodos]);
  // };

  const componentDidMount = (e, value) => {
    e.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon/" + value).then((data) => {
      setPokemaan(data.data);
      console.log(data.data);
    });

    e.preventDefault();
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 500)
      )
      .then((data) => {
        setPokemaan2(data.data);
        console.log(data.data);
      });

    setLevel(Math.floor(Math.random() * (70 - 30 + 1) + 30));
    setLevel2(Math.floor(Math.random() * (70 - 30 + 1) + 30));
    setChecked(true);
  };

  const html2 = (
    <div>
      <input type="submit" value="generate results"></input>
      {/* <Link to="/Results"></Link> */}
    </div>
  );

  return (
    <div className="app">
      <div className="image">
        <img src={Picture} width="360vw"></img>
        <img
          src={pokemaan?.sprites?.front_default}
          className="pokemon_front"
        ></img>

        <img
          src={pokemaan2?.sprites?.back_default}
          className="pokemon_back"
        ></img>
        <img src={statFront} className="statFront"></img>
        <img src={statBack} className="statBack"></img>
        <p className="pokemon_name_front">{pokemaan?.name}</p>
        <p className="pokemon_level_front">Lv{level}</p>
        <p className="pokemon_name_back">{pokemaan2?.name}</p>
        <p className="pokemon_level_back">Lv{level2}</p>
        <p className="pokemon_hp">
          {pokemaan3} / {pokemaan3}
        </p>
      </div>

      {/* <img src={pokemaan?.sprites?.front_shiny}></img>
      <img src={pokemaan?.sprites?.back_shiny}></img>
      <img src={pokemaan?.sprites?.front_default}></img>
      <img src={pokemaan?.sprites?.back_default}></img> */}
      <form onSubmit={(e) => componentDidMount(e, value)}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
      {/* {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.titel}
            <h3>{todo.gedaan ? "gedaan" : "Niet gedaan"}</h3>
            <button onClick={() => updateTodo(todo.id)}>update</button>
            <button onClick={() => deleteTodo(todo.id)}>verwijder</button>
            <button onClick={(e) => componentDidMount(e, value)}>
              get pokemon
            </button>
            <hr />
          </div>
        );
      })} */}

      {checked ? html2 : ""}
      <BrowserRouter>
        <Routes>
          <Route path="/Results" element={<html2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
