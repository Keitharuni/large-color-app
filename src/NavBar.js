import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {Select, MenuItem, Snackbar, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import styles from './styles/NavbarStyles';



class NavBar extends Component {
  state = {
    format: "hex",
    open: false
  };

  handleFormatChange = evt => {
    this.setState({ format: evt.target.value, open: true });
    this.props.changeFormat(evt.target.value);
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { format, open } = this.state;
    const { changeLevel, level, showingAllColors, classes } = this.props;
    return (
      <header className={classes.navbar}>
        <div className={classes.logo}>
          <Link to='/'>PickAColorWithReact</Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #000000</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={2500}
          message={
            <span id='message-id'>
              Format Changed To {format.toUpperCase()}!
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              color='inherit'
              key='close'
              aria-label='close'
              onClick={this.closeSnackbar}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);
