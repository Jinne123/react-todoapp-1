import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [pokemaan, setPokemaan] = useState("");
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([{
    id: 5,
    titel: "boodschappen",
    gedaan: true,
  },
  {
    id: 6,
    titel: "opruimen",
    gedaan: false,
  }])

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      titel: value,
      gedaan: false,
    };

    setValue("");
    setTodos([...todos, newTodo]);
  }

  const updateTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id === id){
        todo.gedaan = !todo.gedaan;
      }
      return todo;
    });

    setTodos([newTodos]);
  }

  const deleteTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos([newTodos]);
  }

  const componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/235")
    .then(response => response.json())
    .then(data => {
      setPokemaan(data);
    });
    console.log(pokemaan);
  }


  return ( 
    <div className="app">
      <img src={pokemaan?.sprites?.front_shiny}></img>
      <img src={pokemaan?.sprites?.back_shiny}></img>
      <img src={pokemaan?.sprites?.front_default}></img>
      <img src={pokemaan?.sprites?.back_default}></img>
      <form onSubmit={(e) => addTodo(e)}>
        <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}}></input>
        <input type="submit"></input>
      </form>
      {todos.map((todo) => {
        return (
        <div key={todo.id}>{todo.titel}
          <h3>{todo.gedaan ? "gedaan" : "Niet gedaan"}</h3>
          <button onClick={() => updateTodo(todo.id)}>update</button>
          <button onClick={() => deleteTodo(todo.id)}>verwijder</button>
          <button onClick={() => componentDidMount()}>get pokemon</button>
          <hr />
        </div>
      );
      })};
  </div>
  );
}

export default App;


// import React, {useState} from "react";
// import "./App.css";
// import TodoForm from './components/todoForm/TodoForm';
// import Todo from './components/todo/Todo';
// import Title from './components/title/Title';


// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       text: "Learn about React",
//       isCompleted: false
//     },
//     {
//       text: "Meet friend for lunch",
//       isCompleted: false
//     },
//     {
//       text: "Build really cool todo app",
//       isCompleted: false
//     }
//   ]);

//   const addTodo = text => {
//     const newTodos = [...todos, { text }];
//     setTodos(newTodos);
//   };

//   const completeTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].isCompleted = true;
//     setTodos(newTodos);
//   };

//   const removeTodo = index => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="app">
//       <div className="todo-list">
//       <Title />
//         {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//           />
//         ))}
//         <TodoForm addTodo={addTodo} />
//       </div>
//     </div>
//   );
// }

// export default App;