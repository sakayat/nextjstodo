import style from "@/app/page.module.scss";

interface Props {
  handleAddTodo: () => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TaskForm: React.FC<Props> = ({ handleAddTodo, content, setContent }) => {
  return (
    <div className={style.task_form}>
      <div className={style.form_item}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter a todo..."
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
