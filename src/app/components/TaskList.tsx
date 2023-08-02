import style from "@/app/page.module.scss";

interface TodoList {
  todos: Todo[];
}

const TaskList: React.FC<TodoList> = ({ todos }) => {
  return (
    <div className={style.tasklist}>
      <h4>Task List</h4>
      {todos.map((todo) => (
        <div key={todo._id} className={style.task_info}>
          <span>{todo.content}</span>
          <div className={style.task_button}>
            <button>Edit Task</button>
            <button>Delete Task</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
