import React from 'react'
import { useContext } from 'react'
import { DataContext } from './DataContext'

function ToDoList() {

const context = useContext(DataContext)
const {data} = context
const {task,
  setTask,
  loaded,
  setLoaded,
  list, 
  setList} = context


  return (
    <>
    <h1>List:{task && loaded && task.task}</h1>
    {/* <p>{list && loaded && list.task}</p> */}
    </>
  )
}

export default ToDoList