import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./styles.css"

const App = () => {
  const [todos, setTodos] = useState(() =>{
  const localValue=localStorage.getItem("ITEMS")
  if(localValue == null) return []
  return JSON.parse(localValue)
})
   useEffect(()=> {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
    },[todos]) 
  const addTodo = (newItem) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAddTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
};

export default App;

// import { useState } from "react"
// import "./styles.css"

// export default function App() {
//   const [todos, setTodos] = useState([])
//   const [newItem, setNewItem] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()

//     setTodos(currentTodos => {
//       return [
//         ...currentTodos,
//         { id: crypto.randomUUID(), title:newItem , completed: false },
//       ]
//     })
//     setNewItem("")
//   }

//   function toggleTodo(id, completed) {
//     setTodos(currentTodos => {
//       return currentTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, completed }
//         }
//         return todo
//     })
//   })
// }

//   function deleteTodo(id) {
//     setTodos(currentTodos => {
//       return currentTodos.filter(todo => todo.id !== id)
//     })
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit} className="new-item-form">
//       <div className="form-row">
//         <label htmlFor="item">New Item : </label>
//         <input
//           value={newItem}
//           onChange={e => setNewItem(e.target.value)}
//           type="text"
//           id="item"
//         />
//       </div>
//       <button className="btn">Stack it</button>
//     </form>
//     <h1 className="header">Todo List</h1>
//     <ul className="list">
//       {todos.length === 0 && "you can rest now buddy "}
//       {todos.map(todo => {
//         return(
//           <li key={todo.id}>
//           <label>
//           <input type="checkbox" 
//           checked={todo.completed} 
//           onChange={e=> toggleTodo(todo.id,e.target.checked)}
//           />
//           {todo.title}
//           </label>
//           <button 
//           onClick={()=>deleteTodo(todo.id)}
//           className="btn btn-danger">Thati Thookiru</button>
//           </li>
//         )
//       })}
//     </ul>
//     </>
//   )
// }

