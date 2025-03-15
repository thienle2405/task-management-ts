import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    createdBy: String,
    listUsers: Array,
    // supervisor: Array,
    taskParentId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true, // Tạo các trường 'createdAt' và 'updatedAt' tự động
  }
);

const Task = mongoose.model("Task", taskSchema, "tasks");

export default Task;
