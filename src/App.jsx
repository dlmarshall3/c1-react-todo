import "./App.css";
import Todo from "./components/todo";

function App() {
  return (
    <>
      <div className="bg-white opacity-70 mt-24 mx-10 p-10 rounded-xl shadow-xl h-[600px]">
        <div className="">
          <h1 className="text-4xl mb-6">To-do application</h1>
        </div>
        <div>
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
