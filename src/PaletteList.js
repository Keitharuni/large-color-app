import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  List,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItem
} from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  state = {
    deleteDialog: false,
    deletingId: ""
  };

  handleDeletePalette = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  };

  openDialog = id => {
    this.setState({ deleteDialog: true, deletingId: id });
  };

  closeDialog = () => {
    this.setState({ deleteDialog: false, deletingId: "" });
  };

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { deleteDialog } = this.state;
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            {/* maybe make the Link into a Button? */}
            <Link to='/palette/new'>Create Palette</Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette
                  openDialog={this.openDialog}
                  id={palette.id}
                  key={palette.id}
                  {...palette}
                  goToPalette={this.goToPalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={deleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDialog}>
          <DialogTitle id='delete-dialog-title'>
            Delete this Palette?
          </DialogTitle>
          <List>
            <ListItem
              className={classes.button}
              button
              onClick={this.handleDeletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[500] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem
              className={classes.button}
              button
              onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[500] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
