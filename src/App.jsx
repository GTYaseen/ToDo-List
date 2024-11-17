import { useState ,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  IoChevronUp,
  IoCalendarClearOutline,
  IoAddOutline,
} from "react-icons/io5";
import { Header } from "./components/Header.jsx";
import { Container } from "./components/Container.jsx";
import { Modal } from "./components/Modal.jsx";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import  PopOver  from "./components/PopOver.jsx";
dayjs.extend(advancedFormat);

function App() {
  const dateRef = useRef(null);
  const priorityRef = useRef(null);
  const [taskName, setTaskName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [priority, setPriority] = useState(1);
  const [selectDate, setSelectDate] = useState(false);
  const [selectPriority, setSelectPriority] = useState(false);
  const [limitDate, setLimitDate] = useState(dayjs().format("YYYY-MM-DD"));
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
          <Container>
            <div className="h-[180px] w-full" />
            <input
              type="text"
              placeholder="Enter new task"
              className="w-full outline-none placeholder:text-xl"
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div
              className="flex justify-start items-center mt-10 gap-2 "
              onClick={() => setSelectDate(!selectDate)}
              ref={dateRef}
            >
              <div className="flex gap-2 items-center border-2 rounded-full p-2 cursor-pointer h-11">
                <IoCalendarClearOutline className="text-2xl text-gray-400" />
                <p className="text-gray-400">
                  {limitDate === dayjs().format("YYYY-MM-DD")
                    ? "Today"
                    : limitDate}
                </p>
              </div>
              <div
                className="flex items-center justify-center border-2 rounded-full w-11 h-11 cursor-pointer"
                onClick={() => setSelectPriority(!selectPriority)}
                ref={priorityRef}
              >
                <div className="flex justify-center items-center bg-transparent border-2 border-blue-400 p-[2px] rounded-full">
                  <div className="w-3 h-3 rounded-full bg-blue-400 " />
                </div>
              </div>
              <PopOver isOpen={selectDate} anchorRef={dateRef} onClose={() => setSelectDate(false)}>
                <div className="flex flex-col gap-2">
                  <input
                    type="date"
                    value={limitDate}
                    onChange={(e) => setLimitDate(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      setSelectDate(false);
                    }}
                    className="p-2 bg-sky-600 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </PopOver>
              <PopOver
                isOpen={selectPriority}
                onClose={() => setSelectPriority(false)}
                anchorRef={priorityRef}
              >
                <div className="flex flex-col gap-2">
                  <input
                    type="color"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      setSelectPriority(false);
                    }}
                    className="p-2 bg-sky-600 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </PopOver>
            </div>
          </Container>
        </Modal>

        <div className="fixed bottom-4 right-4 rounded-full bg-blue-600 shadow-blue-400 shadow flex justify-center items-center ">
          {isOpen ? (
            <button
              onClick={() => {
                setIsOpen(false),
                  setAnimate(false),
                  setTasks([
                    ...tasks,
                    {
                      id: tasks.length + 1,
                      name: taskName,
                      process: false,
                      limitDate,
                    },
                  ]);
              }}
              className={`text-xl text-white flex gap-1 items-center py-2 px-4 ${
                animate
                  ? "transition-all duration-700 translate-x-[0px] animate-once"
                  : "translate-x-[100px]"
              }`}
            >
              <p className="text-white text-md">New task </p>
              <IoChevronUp />
            </button>
          ) : (
            <div
              className="p-1 transition-all duration-700 animate-once"
              onClick={() => {
                setIsOpen(true), setTimeout(() => setAnimate(true), 0);
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
