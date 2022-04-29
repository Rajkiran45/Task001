import AppBar from "@mui/material/AppBar";
import { Toolbar, TextField, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import { DatePicker, TimePicker } from "@mui/lab";
import { LocalizationProvider } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ButtonGroup } from "@mui/material/";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
// import { makeStyles } from "@mui/material/styles";
export default function App() {
  function setDataD1() {
    let obj = {
      startdate: { Dvalue1: Dvalue1 && Dvalue1.toLocaleDateString() }
    };
    localStorage.setItem("startdate1", JSON.stringify(obj));
  }
  function getDataD1() {
    let data = localStorage.getItem("startdate1");
    data = JSON.parse(data);
  }
  function setDataT1() {
    let obj = {
      starttime1: { Tvalue1: Tvalue1 && Tvalue1.toLocaleTimeString() }
    };
    localStorage.setItem("starttime1", JSON.stringify(obj));
  }
  function getDataT1() {
    let data = localStorage.getItem("starttime1");
    data = JSON.parse(data);
    // console.log(data);
  }
  function setDataD2() {
    let obj = { enddate: { Dvalue2: Dvalue2 && Dvalue2.toLocaleDateString() } };
    localStorage.setItem("enddate1", JSON.stringify(obj));
  }
  function getDataD2() {
    let data = localStorage.getItem("enddate1");
    data = JSON.parse(data);
    // console.log(data);
  }
  function setDataT2() {
    let obj = {
      starttime1: { Tvalue2: Tvalue2 && Tvalue2.toLocaleTimeString() }
    };
    localStorage.setItem("endtime1", JSON.stringify(obj));
  }
  function getDataT2() {
    let data = localStorage.getItem("endtime1");
    data = JSON.parse(data);
    // console.log(data);
  }
  const mdTheme = createTheme({
    palette: {
      primary: {
        main: "#7b1fa2",
        display: "flex"
      },
      secondary: {
        main: "#757575"
      }
    },
    drawer: {
      width: 50
    },
    AppBar: {
      borderBottom: "10px solid #B22234"
    }
  });
  const [Dvalue1, setDValue1] = React.useState(new Date());
  const [Dvalue2, setDValue2] = React.useState(new Date());

  const [Tvalue1, setTValue1] = React.useState(new Date());
  const [Tvalue2, setTValue2] = React.useState(new Date());
  // const useStyles = makeStyles({});
  // const classes = useStyles();
  // console.log({ Tvalue1: Tvalue1 && Tvalue1.toLocaleTimeString() });
  // console.log({ Dvalue1 });
  // console.log({ Dvalue2 });
  // console.log({ Tvalue2: Tvalue2 && Tvalue2.toLocaleTimeString() });

  const handleChange1 = (newDValue1) => {
    setDValue1(newDValue1);
    // setDataD1();
    // getDataD1();
  };

  const handleChange2 = (newDValue2) => {
    setDValue2(newDValue2);
    // setDataD2();
    // getDataD2();
  };
  const handleTChange1 = (newTValue1) => {
    setTValue1(newTValue1);
    // setDataT1();
    // getDataT1();
  };

  const handleTChange2 = (newTValue2) => {
    setTValue2(newTValue2);
    // setDataT2();
    // getDataT2();
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Grid
        id="grid1"
        container
        spacing={50}
        marginLeft={20}
        style={{
          marginTop: "150px",
          display: "flex",
          flexDirection: "column",
          width: "30%",
          marginBottom: "5%"
        }}
        justify="center"
      >
        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Association Name
            </Typography>
            <Button color="inherit">Logo</Button>

            <Drawer variant="permanent">
              <List>
                <ListItem button component="a">
                  <ListItemText
                    primary="Start"
                    color="success"
                    onClick={() => {
                      setDataD1();
                      getDataD1();
                      setDataT1();
                      getDataT1();
                      let text = document.getElementById("txt");
                      text.innerText = ` You Started on  ${Dvalue1.toLocaleDateString()} at ${Tvalue1.toLocaleTimeString()}`;
                    }}
                    onDoubleClick={() => {
                      let text = document.getElementById("txt");

                      text.innerText = "";
                    }}
                  />
                </ListItem>
                <ListItem button component="a">
                  <ListItemText
                    primary="End"
                    color="danger"
                    onClick={() => {
                      setDataD2();
                      getDataD2();
                      setDataT2();
                      getDataT2();
                      let text2 = document.getElementById("txt2");
                      text2.innerText = ` You Ended on  ${Dvalue2.toLocaleDateString()} at ${Tvalue2.toLocaleTimeString()}`;
                    }}
                    onDoubleClick={() => {
                      let text2 = document.getElementById("txt2");

                      text2.innerText = "";
                    }}
                  />
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={Dvalue1}
            onChange={handleChange1}
            renderInput={(params) => <TextField {...params} />}
          />

          <TimePicker
            label="Start Time"
            value={Tvalue1}
            onChange={handleTChange1}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <ButtonGroup orientation="vertical" variant="contained">
          <Button
            variant="contained"
            color="success"
            style={{ height: 50 }}
            onClick={() => {
              setDataD1();
              getDataD1();
              setDataT1();
              getDataT1();
              let text = document.getElementById("txt");
              text.innerText = ` You Started on  ${Dvalue1.toLocaleDateString()} at ${Tvalue1.toLocaleTimeString()}`;
            }}
            onDoubleClick={() => {
              let text = document.getElementById("txt");

              text.innerText = "";
            }}
          >
            Start Now
          </Button>
          <Button color="secondary" key="2">
            Submit with OTP
          </Button>
        </ButtonGroup>
        <p id="txt"></p>
      </Grid>
      <Grid
        container
        spacing={50}
        marginLeft={20}
        marginTop={10}
        style={{
          display: "flex",
          position: "relative",

          flexWrap: "column",

          flexDirection: "column",
          width: "30%"
        }}
        justify="center"
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="End Date"
            value={Dvalue2}
            onChange={handleChange2}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="End Time"
            value={Tvalue2}
            onChange={handleTChange2}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <ButtonGroup orientation="vertical" variant="contained">
          <Button
            id="end"
            variant="contained"
            color="warning"
            onClick={() => {
              setDataD2();
              getDataD2();
              setDataT2();
              getDataT2();
              let text2 = document.getElementById("txt2");
              text2.innerText = ` You Ended on  ${Dvalue2.toLocaleDateString()} at ${Tvalue2.toLocaleTimeString()}`;
            }}
            onDoubleClick={() => {
              let text2 = document.getElementById("txt2");

              text2.innerText = "";
            }}
          >
            End Now
          </Button>
          <Button color="secondary" key="2">
            Submit with OTP
          </Button>
        </ButtonGroup>
        <p id="txt2"></p>
      </Grid>
    </ThemeProvider>
  );
}
