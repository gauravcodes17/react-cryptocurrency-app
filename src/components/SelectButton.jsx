import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ selected }) => ({
  selectbutton: {
    border: "1px solid #1abc9c",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: selected ? "#1abc9c" : "",
    color: selected ? "black" : "#1abc9c",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "#1abc9c",
      color: "black",
    },
    //width: "22%",
    margin: 3,
  },
}));

const SelectButton = ({ children, onClick }) => {
  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
