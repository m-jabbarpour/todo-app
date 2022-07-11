import { Box, Typography } from "@mui/material";
import React from "react";
import { styles } from "./todoItem.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = ({ id, title, backgroundColor, todoList, setTodoList, displaySelectedTodo }) => {
  const deleteTodoHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <Box backgroundColor={backgroundColor} sx={styles.root}>
      <Typography variant="h6" sx={styles.title}>
        {title}
      </Typography>
      <Box>
        <DeleteIcon sx={styles.icon} onClick={() => deleteTodoHandler(id)} />
        <EditIcon sx={styles.icon} onClick={() => displaySelectedTodo(id, title) }/>
      </Box>
    </Box>
  );
};

export default TodoItem;
