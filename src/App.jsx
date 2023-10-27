import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"

function App(){
  const [list,setList] = useState([
    {id: 1,todoData:'todo1', finished:false},
    {id: 2,todoData:'todo2',finished:true},
]);


  return(
    <>
       <AddTodo updateList={(todo) => setList([
        ...list,{id: list.length+1 , list,todoData:todo, finished:false}
        ])}/>
       <TodoList list={list} />
    </>
  )
}

export default App
