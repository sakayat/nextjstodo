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
  const [index, setIndex] = useState<number>(-1);

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

  // editTodo
  const handleEdit = (todo: any) => {
    setContent(todo.content);
    setIndex(todo._id);
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Todo App</h1>
      <div>
        <TaskForm
          handleAddTodo={handleAddTodo}
          content={content}
          setContent={setContent}
        />
        <TaskList todos={todos} handleEdit={handleEdit}/>
      </div>
    </div>
  );
};

export default HomePage;
