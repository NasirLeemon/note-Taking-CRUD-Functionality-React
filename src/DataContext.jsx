import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const defaultTask = {
    id: new Date(),
    task: "",
};

  const [task, setTask] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState(null);

  const handleChange = (evt) => {
    setTask({
     ...task,
     [evt.target.name] : evt.target.value   
    })
  };

  const addTask = (task) => {
        // console.log(task);
        // setLoaded(true) 
        const TaskToAdd = {
            id: new Date(),
            ...task,
        }
        setTask({TaskToAdd, ...task})
       
        console.log(task);
  }

  const handleSumbit = (evt) => {
    evt.preventDefault();
//   console.log(task);

  addTask(task)
  };

  const addTaskToUI = () => {
    setLoaded(true)
    // setTask('')
  }



  const value = {
    task,
    setTask,
    loaded,
    setLoaded,
    list,
    setList,
    handleChange,
    handleSumbit,
    addTaskToUI
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
