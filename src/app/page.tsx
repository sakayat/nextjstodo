"use client";
import style from "@/app/page.module.scss";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
  _id: number;
  content: string;
}

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData
  const fetchData = async () => {
    const res = await axios.get("/api/todos");
    setTodos(res.data);
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Todo App</h1>
      <div>
        <TaskForm />
        <TaskList todos={todos} />
      </div>
    </div>
  );
};

export default HomePage;
