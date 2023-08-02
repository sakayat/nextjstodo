import style from "@/app/page.module.scss";

interface Props {
  handleAddTodo: () => void;
  handleUpdateTodo: () => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  index: number;
}

const TaskForm: React.FC<Props> = ({
  handleAddTodo,
  handleUpdateTodo,
  content,
  setContent,
  index,
}) => {
  return (
    <div className={style.task_form}>
      <div className={style.form_item}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter a todo..."
        />
        {index === -1 ? (
          <button onClick={handleAddTodo}>Add</button>
        ) : (
          <button onClick={handleUpdateTodo}>Update</button>
        )}
      </div>
    </div>
  );
};

export default TaskForm;
