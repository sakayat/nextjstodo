import style from "@/app/page.module.scss";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Todo App</h1>
      <div className="">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}
