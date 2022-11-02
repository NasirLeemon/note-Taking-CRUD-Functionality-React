import React from 'react'
import { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { DataContext } from './DataContext'

function ToDoForm() {

  const context = useContext(DataContext)
  const {task,
    setTask,
    loaded,
    setLoaded,
    list, 
    setList,
    handleChange,
    handleSumbit,
    addTaskToUI,
  } = context





  return (
    <>
    <form action="" onSubmit={handleSumbit}>

<label htmlFor="task" />
<input className='me-3' type="text" name="task" id="task" onChange={handleChange} placeholder='Add Task Here'/>
<Button  type='submit'>Submit</Button>
<Button onClick={addTaskToUI}>Add</Button>

    </form>
    
    </>
  )
}

export default ToDoForm