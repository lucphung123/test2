import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filterTasks = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !task.completed;
    } else {
      return task.completed;
    }
  });

  return (
    <div style={{backgroundImage: `url('https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg')`, marginLeft:'33%',display:"flex", flexDirection:'column', alignItems:'center', gap:'40px', border:'1px solid black', padding:'10px',width:"33%",height:"100%", borderRadius:'10px'}}>
      <h1 style={{textAlign:'center', fontSize:'48px', color:'#FF4500'}}>#Todo App</h1>
      <TodoForm addTask={addTask} />
      <hr style={{border: '1px solid', width: '100%',opacity:'50%',color:'white'}} />
      <TodoFilter filterTasks={filterTasks} />
      <TodoList
        tasks={filteredTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
      <button onClick={deleteAllTasks} style={{backgroundColor:'#00FF00', color:'white', border:'none', padding:'10px', borderRadius:'5px', fontSize:'24px',cursor:'pointer'}}>Delete All </button>
    </div>
  );
};

export default TodoApp;