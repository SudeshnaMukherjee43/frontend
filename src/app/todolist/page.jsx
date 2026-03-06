"use client"
import { Trash2 } from 'lucide-react';
import React, {useState} from 'react'

const TodoList = () => {

   // let count = 1;

    //const [count, setcount] = useState(1);

    const [ tasklist,setTasklist] = useState([
    { task : 'sleep' , completed: false},
    { task : 'eat' , completed: false},
    { task : 'repeat' , completed: false},
  ]);
  
  const addNewTask = (e) => {
    if (e.code === "Enter") {
      console.log(e.target.value);

      const newTask = { task: e.target.value, completed: false};

      setTasklist([ newTask, ...tasklist]);

      e.target.value = '';
    }
  };

  const deleteTask = (index) => {
    const temp = tasklist;
    temp.splice(index, 1);
    setTasklist([...temp]);
  }

  return (
    <div className=' bg-gray-100 min-h-screen'>
        {/* <button className='border p-4'onClick={() => { alert("Button clicked!")}}>
        Click Me
        </button>
        <h1 className='text-2xl'>{count}</h1>

        <button classroom='border p-3 mt-5'
        onClick={() => {
           // count++;
           setcount(count + 1); 
           console.log(count);
        }
        }>add count</button> */}
        

        <div className='container py-10'>
          <h1 className='text-3xl text-center font-bold mb-5'>📃Todo List</h1>
          <div className='border rounded-xl bg-white shadow-xl'>
            <div className='p-5'>
              <input type ="text"
              onKeyDown={addNewTask}
                
               />
               </div>
               <div className='p-5'>
                {
                  tasklist.length === 0 ? (
                      <p className='text-center font-bold text-gray-400 text-xl'>
                          😒 No Task Added Yet 
                      </p>
                  ) : (
                       tasklist.map((obj, index) => {
                           return <div key={index}
                            className='border border-grey-400 p-4 rounded-lg mb-4 flex justify-between items-center'>

                              <div className='flex gap-3 w-1/3'>
                              <input type="checkbox"
                              onChange={(e) => {
                                const temp = tasklist;
                                temp[index].completed = e.target.checked;
                                setTasklist([...temp]);
                              }}
                              />
                            <p className='text-lg'>{obj.task}</p>
                            </div>

                            {
                              obj.completed ? (
                                <p className='bg-green-200 text-green-800
                                font-semibold px-2 rounded-full'>Completed</p>
                              ) : (
                                <p className='bg-amber-200 text-amber-800
                                font-semibold px-2 rounded-full
                                '>Not Completed</p>
                              )
                            }
                            
                            <button 
                            onClick={()=>{ deleteTask(index)}}
                            className='bg-red-500 text-white p-2 rounded-md'>
                              <Trash2 />
                            </button>
                            </div>
                  })
                )
                }
                
                
               </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList