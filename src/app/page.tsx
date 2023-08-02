import style from "@/app/page.module.scss";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Todo App</h1>
      <TaskList />
    </div>
  );
}
