import React from "react";

const Todo = () => {
  return (
    <div>
      <h1> Add Task </h1>
      <form>
        <div className="flex flex-row gap-2">
          <p>Enter Title</p>
          <textarea className="" placeholder="title"></textarea>
        </div>
        <div className="flex flex-row gap-2">
          <p>enter due date</p>
          <textarea className="" placeholder="title"></textarea>
        </div>
        <button >add</button>
      </form>
    </div>
  )
}

export default Todo