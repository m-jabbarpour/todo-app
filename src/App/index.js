import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useStyles } from "./app.styles";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";

import TodoForm from "../components/common/TodoForm/TodoForm";
import TodoItem from "../components/customs/TodoItem";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

function App() {
  const randomColorGenerator = () => {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = "#";
    for (let i = 1; i <= 6; i++) {
      color += list[Math.floor(Math.random() * list.length)];
    }
    return color;
  };
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditionActive, setIsEditionActive] = useState(false);
  const [editionId, setEditionId] = useState("");

  useEffect(() => {
    const localTodoList = localStorage.getItem("todoList");
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const submitNewTodo = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return toast.error("The field is empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        backgroundColor: randomColorGenerator(),
        title: inputValue,
      },
    ]);

    setInputValue("");
  };

  const submitEditedTodo = (e) => {
    e.preventDefault();
    if (!inputValue)
      return toast.error("The field is empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    const newTodoList = [...todoList];
    const foundIndex = todoList.findIndex((todo) => todo.id === editionId);
    newTodoList[foundIndex].title = inputValue;
    setTodoList(newTodoList);
    setInputValue("");
    setIsEditionActive(false);
  };

  const displaySelectedTodo = (id, title) => {
    setInputValue(title);
    setIsEditionActive(true);
    setEditionId(id);
  };

  const classes = useStyles();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box component="main" className={classes.root} boxShadow={3}>
        <Typography variant="h5" className={classes.title}>
          Feelin' productive today?
        </Typography>
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          submitNewTodo={submitNewTodo}
          submitEditedTodo={submitEditedTodo}
          isEditionActive={isEditionActive}
        />

        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            backgroundColor={todo.backgroundColor}
            todoList={todoList}
            setTodoList={setTodoList}
            displaySelectedTodo={displaySelectedTodo}
          />
        ))}
      </Box>
    </>
  );
}

export default App;
