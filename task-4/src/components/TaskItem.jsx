
import { useTask } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useTask();

  return (
    <div className="p-3 border rounded flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm">{task.description}</p>
        <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}
          className={`px-2 py-1 text-sm rounded ${
            task.completed ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          {task.completed ? "Done" : "Pending"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white text-sm rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
