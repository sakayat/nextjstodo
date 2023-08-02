import style from "@/app/page.module.scss";

const TaskForm = () => {
  return (
    <div className={style.task_form}>
      <form className={style.form_item}>
        <input type="text" placeholder="Enter a todo..." />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
