import style from "@/app/page.module.scss";

type Todo = {
  _id: number;
  content: string;
};

type TodoList = {
  handleEdit: (arg: any) => void;
  handleDelete: (arg: number) => void;
  todos: Todo[];
};

const TaskList: React.FC<TodoList> = ({ todos, handleEdit, handleDelete }) => {
  if (todos.length === 0) {
    return <p className={style.loading}>Loading...</p>;
  }
  return (
    <div className={style.tasklist}>
      <h4>Task List</h4>
      {todos.map((todo) => (
        <div key={todo._id} className={style.task_info}>
          <span>{todo.content}</span>
          <div className={style.task_button}>
            <button onClick={() => handleEdit(todo)}>Edit Task</button>
            <button onClick={() => handleDelete(todo._id)}>Delete Task</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
