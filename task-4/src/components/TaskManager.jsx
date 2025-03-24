import { useState } from "react";
import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskManager = () => {
  const { tasks, addTask } = useTask();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, dueDate, completed: false });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4 shadow-md rounded">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </form>

      <div className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
