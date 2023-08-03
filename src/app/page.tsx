"use client";
import style from "@/app/page.module.scss";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation'


type Todo = {
  _id: number;
  content: string;
}

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [content, setContent] = useState<string>("");
  const [index, setIndex] = useState<number>(-1);

  const {data: session} = useSession()

  if(session){
    redirect("/")
  }

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
    if(!session){
      return toast.warn("You must be login")
    }
    try {
      const res = await axios.post("/api/todos", {
        content,
      });
      setTodos([...todos, res.data]);
      setContent("")
      toast.success("Added Successfully")
    } catch (error) {
      console.log("Failed to post data", error);
    }
  };

  // editTodo
  const handleEdit = (todo: any) => {
    if(!session){
      return toast.warn("you must be login")
    }
    setContent(todo.content);
    setIndex(todo._id);
  }

  // addUpdate
  const handleUpdateTodo = async () => {
    if(!session){
      return toast.warn("you must be login")
    }
    try {
      await axios.put(`/api/todos/${index}`, { content });
      const updateTodo = todos.map((todo) => {
        if (todo._id === index) {
          return { ...todo, content };
        }
        return todo;
      });
      setTodos(updateTodo);
      setContent("")
      setIndex(-1)
      toast.success("Updated Successfully")
    } catch (error) {
      console.log("Failed to updated data", error);
    }
  }

  // addDelete
  const handleDelete = async (id: number) => {
    if(!session){
      return toast.warn("you must be login")
    }
    try {
      await axios.delete(`/api/todos/${id}`);
      const removeTodo = todos.filter((todo) => todo._id !== id);
      setTodos(removeTodo);
      toast.success("Delete Successfully")
    } catch (error) {
      console.log("Failed to delete data", error);
    }
  }

  return (
    <div className={style.wrapper}>
      <div>
        <TaskForm
          handleAddTodo={handleAddTodo}
          handleUpdateTodo={handleUpdateTodo}
          content={content}
          setContent={setContent}
          index={index}
        />
        <TaskList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </div>
  );
};

export default HomePage;
