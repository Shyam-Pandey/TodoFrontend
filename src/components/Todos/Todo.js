import React, { useState } from 'react'
import axios from 'axios';

const Todo= () => {
  // To Store the value from Frontend
  const [todoName, setTodoName] = useState("");
  console.log(todoName);

  // Function to send the Data
  const submitData = async () => {
    const data = {
      title:todoName
    };
    const res = await axios.post("/createTodo", data);
    console.log(res);
  };
  // To handle the Default
  const handleSubmit = (event) => {
    event.preventDefault();
    // To submit the Data
    submitData();
    // But Empty the previous Details
    setTodoName("");
  };

  const addTodo = (e)=>{
    setTodoName(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='app_todo w-80 flex flex-col h-[51.3px]'>
          <div className='flex justify-between px-2 py-2 w-50 bg-white border-2 border-black rounded-sm'>
            <input type='text' className='w-26 h-8 outline-0' value={todoName} onChange={addTodo} />
            <button className=''>+</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default Todo;