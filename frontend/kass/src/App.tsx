import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KanyeImageSource from "./resources/ye.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


function App() {
  const [quote, setQuote] = useState("hello");

  useEffect(() => {
    const queryString = "127.0.0.1:3001/getQuote/";

    fetch(queryString)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to get a good response from api");
        }
      })
      .then((data) => {
        console.log(data)
        // setQuote(data)
      });
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignContent: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flex: 1,
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={KanyeImageSource}></img>
          </Paper>

          <Paper elevation={0} sx={{ flex: 1, height: "100%", width: "100%" }}>
            <Card
              sx={{
                minWidth: 275,
                textAlign: "initial",
                alignItems: "initial",
                justifyContent: "initial",
                height: "initial",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  {quote}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Paper>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
