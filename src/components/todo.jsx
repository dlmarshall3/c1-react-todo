import { useState } from "react";

import save from "../assets/save.svg";
import trash from "../assets/trash.svg";

export default function Todo() {
  const [inputTodo, setInputTodo] = useState("");
  const [renderedTodo, setRenderedTodo] = useState("");
  const [error, setError] = useState("");

  function handleTodoSave() {
    if (!inputTodo) {
      setError("Hey dummy, you forgot your todo.");
      return;
    }
    setError(null);
    setRenderedTodo(inputTodo);
  }

  function handleTodoDelete() {
    setRenderedTodo(null);
  }

  return (
    <>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Todo..."
          className="border border-1 rounded-xl px-4 shadow-md mr-6 mb-12"
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <img src={save} className="h-[25px] mr-2" onClick={handleTodoSave} />
      </div>

      <button className="w-1/4 bg-green-500 py-2 rounded-full shadow-md">Hello</button>

      {error && <span className="text-red-500">{error}</span>}

      {renderedTodo && (
        <div className="flex flex-row">
          <span className=" mr-4">{renderedTodo}</span>
          <img src={trash} className="h-[25px]" onClick={handleTodoDelete} />
        </div>
      )}
    </>
  );
}
