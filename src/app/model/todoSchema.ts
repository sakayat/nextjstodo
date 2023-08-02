import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
  
  export default Todo;