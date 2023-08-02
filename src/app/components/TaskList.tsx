import style from "@/app/page.module.scss";

const TaskList: React.FC = () => {
  return (
    <div className={style.tasklist}>
      <h4>Task List</h4>
      <div className={style.taskinfo}>
        <p>Artificial Intelligence and Machine from healthcare to finance.</p>
        <div className={style.task_button}>
          <button>Edit Task</button>
          <button>Delete Task</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
