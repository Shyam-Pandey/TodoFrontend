import React, { useState } from 'react'

function Task() {
    const [taskData,setTaskData] = useState('')

    const addTask = (e) =>{
        setTaskData(e.value.target)
    }
    return (
        <>
            <div className='bg-[#0C0D5D] w-[1250px] h-[92vh] '>
                <h1 className='text-white'>Add Taks</h1>
                <div className='app_task flex flex-col items-center justify-center'>
                    <div className='flex justify-between w-2/5 h-10 bg-white rounded-lg py-2 px-2 '>
                        <input className='' type='text' placeholder='Enter Taks' onChange={addTask} />
                        <button className='text-lg'>+</button>
                    </div>

                    <div className='todo_inner-list w-[370px] h-10 flex flex-row justify-between p-2 rounded-lg outline-none bg-slate-50 my-2'>
                        <p>Home</p>
                        <div className='todo_update_btn flex flex-row justify-end gap-5'>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>

                    <div className='todo_inner-list w-[370px] h-10 flex flex-row justify-between p-2 rounded-lg outline-none bg-slate-50 my-2'>
                        <p>Home</p>
                        <div className='todo_update_btn flex flex-row justify-end gap-5'>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>

                    <div className='todo_inner-list w-[370px] h-10 flex flex-row justify-between p-2 rounded-lg outline-none bg-slate-50 my-2'>
                        <p>Home</p>
                        <div className='todo_update_btn flex flex-row justify-end gap-5'>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>

                    <div className='todo_inner-list w-[370px] h-10 flex flex-row justify-between p-2  rounded-lg outline-none bg-slate-50 my-2'>
                        <p>Home</p>
                        <div className='todo_update_btn flex flex-row justify-end gap-5'>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Task