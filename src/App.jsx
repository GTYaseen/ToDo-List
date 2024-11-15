import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoAddOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { Header } from "./components/Header.jsx";
import { Container } from "./components/Container.jsx";
import { Modal } from "./components/Modal.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "Personal",
      taskCount: 2,
      progress: 0,
      tasks: [
        {
          id: 1,
          name: "Task 1",
          process: false,
        },
        {
          id: 2,
          name: "Task 2",
          process: false,
        },
      ],
    },
    {
      id: 2,
      name: "Work",
      taskCount: 1,
      progress: 0,
      tasks: [
        {
          id: 1,
          name: "Task 3",
          process: false,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="bg-sky-50 h-screen">
        <Header />
        <Container>
          <h1 className="text-3xl font-semibold drop-shadow text-sky-950">
            What's up, Joy!
          </h1>
          <p className="text-lg mt-4 text-gray-400">categories</p>
        </Container>
        <div className="flex gap-4 py-4 ml-6  text-gray-400 overflow-x-scroll">
          {category.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl p-4 min-w-[200px] bg-white shadow-md"
            >
              <p className="text-sm text-gray-400">{cat.taskCount} tasks</p>
              <h2 className="font-semibold text-black text-lg">{cat.name}</h2>
              <p>{cat.progress}%</p>
            </div>
          ))}
        </div>
        <Container>
          <h2 className="font-semibold text-lg mt-4">TODAY'S TASKS</h2>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border rounded p-4 mt-4 bg-white shadow"
            >
              <p className="text-sm text-gray-400">{task.name}</p>
              <p>{task.process}%</p>
            </div>
          ))}
        </Container>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          modak
        </Modal>

        <div className="fixed bottom-4 right-4 rounded-full bg-blue-600 shadow-blue-400 shadow flex justify-center items-center ">
          {isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className={`text-xl text-white flex gap-1 items-center py-2 px-4 translate-x-[100px] ${
                animate ? "transition-all duration-700 translate-x-[0px]" : ""
              }`}
            >
              <p className="text-white text-lg">New task </p>
              <IoChevronUp />
            </button>
          ) : (
            <div
              className="p-1 transition-all duration-700 animate-once"
              onClick={() => {
                setIsOpen(true), setTimeout(() => setAnimate(true), 50);
              }}
            >
              <IoAddOutline className="text-4xl text-white " />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
