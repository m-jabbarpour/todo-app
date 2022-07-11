import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.dark,
    width: "100%",
    maxWidth: "20rem",
    color: "white",
    margin: " 5rem auto",
    padding: "1rem",
    borderRadius: "1rem",
  },
  title: {
    "&&": {
      marginBottom: "1.5rem",
    },
  },
}));
