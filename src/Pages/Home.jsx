import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
//import { CryptoState } from "../CryptoContext";
//import { CircularProgress } from "@material-ui/core";

const Home = () => {
  //const { loader } = CryptoState();

  return (
    <>
      {/*loader ? (
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
      ) : (
        <>
          <Banner />
          <CoinsTable />
        </>
      )*/}
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Home;
