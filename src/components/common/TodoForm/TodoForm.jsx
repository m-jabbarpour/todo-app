import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { formStyles } from "./todoForm.syles";

const TodoForm = ({
  inputValue,
  setInputValue,
  submitNewTodo,
  isEditionActive,
  submitEditedTodo,
}) => {
  return (
    <Box
      component="form"
      sx={formStyles}
      onSubmit={isEditionActive ? submitEditedTodo : submitNewTodo}
    >
      <TextField
        id="outlined-basic"
        label="Add a Todo"
        variant="outlined"
        size="small"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button variant="contained" type="submit">
        {isEditionActive ? "Edit" : "Add"}
      </Button>
    </Box>
  );
};

export default TodoForm;
