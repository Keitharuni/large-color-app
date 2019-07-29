import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PaletteMetaForm from "./PaletteMetaForm";

export default class PaletteFormNav extends Component {
  render() {
    const {
      classes,
      open,
      palettes,
      handleSubmitEmoji,
      handleDrawerOpen
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <PaletteMetaForm
              palettes={palettes}
              handleSubmitEmoji={handleSubmitEmoji}
            />
            <Link style={{ textDecoration: "none" }} to='/'>
              <Button
                style={{ marginLeft: "0.2rem" }}
                variant='contained'
                color='secondary'>
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    );
  }
}
