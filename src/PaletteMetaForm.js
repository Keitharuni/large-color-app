import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default class PaletteMetaForm extends Component {
  state = {
    open: false,
    newPaletteName: "",
    showEmoji: false
  };

  componentDidMount(props) {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  showEmoji = () => {
    this.setState({ showEmoji: true, open: false });
  };

  savePalette = emoji => {
    this.setState({ showEmoji: false });
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmitEmoji(newPalette);
    this.setState({ open: false });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, showEmoji: false });
  };

  render() {
    const { open, newPaletteName, showEmoji } = this.state;
    return (
      <div>
        <Button
          style={{ margin: "0 0.2rem" }}
          variant='contained'
          color='primary'
          onClick={this.handleClickOpen}>
          SAVE
        </Button>
        <Dialog open={showEmoji} onClose={this.handleClose}>
          <DialogTitle>Choose a Palette Emoji</DialogTitle>
          <Picker title='Pick a Palette Emoji' onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          onClose={this.handleClose}
          open={open}
          aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-tite'>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmoji}>
            <DialogContent>
              <DialogContentText>
                Enter a name for your new B-E-A-utiful palette!
              </DialogContentText>
              <TextValidator
                label='Palette Name'
                onChange={this.handleChange}
                value={newPaletteName}
                name='newPaletteName'
                fullWidth
                margin='normal'
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter palette name",
                  "Palette name must be unique"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color='primary'>
                Cancel
              </Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}
