import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import Error from "./Pages/Error";
import { makeStyles } from "@material-ui/core";
//import { CryptoState } from "./CryptoContext";
//import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "#fff",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  //const { loader } = CryptoState();

  /*if (loader)
    return (
      <CircularProgress
        style={{
          color: "#1abc9c",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "90vh",
        }}
        size={200}
        thickness={1}
      />
    );*/

  return (
    <>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<Coin />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
