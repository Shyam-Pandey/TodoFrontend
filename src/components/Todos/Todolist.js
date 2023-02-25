import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Todolist() {
    const [todoList,setTodoList] = useState(null);

    const fetchTodoList = async ()=>{
        const resp = await axios.get("/getTodos");
        console.log(resp);
        // if No users are there please dont set the values
    if (resp.data.getAllTodo.length > 0) {
        setTodoList(resp.data.getAllTodo);
      }
    }
    useEffect(() => {
        fetchTodoList();
      }, [todoList]);

      const deleteTodo = async (todoId) =>{
        const getTodo = await axios.delete(`/deleteTodo/${todoId}`);
        console.log(getTodo);
      }

      const editTodo = async (todoId)=>{
        const newtitle = prompt("Enter your new todo title name");

    if (!newtitle) {
      alert("Please Enter Title" );
    } else {        
        const editTodo = await axios.put(`/updateTodoTitle/${todoId}`,{title:newtitle})
        console.log(editTodo);
      }
    }
    return (
        <div >
            <div className='todo_list flex flex-col text-white'>
                {todoList && todoList.map((todos) =>(
                <div className='todo_inner-list flex flex-row justify-between bg-slate-500'>
                    <p>{todos.title}</p>
                    <div className='todo_update_btn flex flex-row justify-end gap-5'>
                        <button onClick={()=> deleteTodo(todos._id)}>Delete</button>
                        <button onClick={()=>editTodo(todos._id)} >Edit</button>
                    </div>
                </div>
               ))} 
            </div>
        </div>
    )
}
export default Todolist;