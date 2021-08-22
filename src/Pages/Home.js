import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import bg from "../pics/p.jpg";
import Main from "../menu/main";
const useStyle = makeStyles({
  gridback: {
    backgroundColor: "white",
    margin: "0.5em",
    borderRadius: "50px",
    padding: "20px",
  },
  itemimg: {
    width: "200px",
    height: "200px",
    padding: "10px",
  },
  outer: {
    padding: "10px",
    maxWidth: "100%",
  },
});

function Home() {
  const classes = useStyle();
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
