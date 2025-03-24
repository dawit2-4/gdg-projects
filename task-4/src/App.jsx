import { TaskProvider } from "./context/TaskContext"
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
