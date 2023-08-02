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
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/todos");
      setTodos(res.data);
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };

  // addTodo
  const handleAddTodo = async () => {
    try {
      const res = await axios.post("/api/todos", {
        content,
      });
      setTodos([...todos, res.data]);
    } catch (error) {
      console.log("Failed to post data", error);
    }
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Todo App</h1>
      <div>
        <TaskForm
          handleAddTodo={handleAddTodo}
          content={content}
          setContent={setContent}
        />
        <TaskList todos={todos} />
      </div>
    </div>
  );
};

export default HomePage;
