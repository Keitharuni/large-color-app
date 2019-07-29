import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  state = {
    currentColor: "teal",
    newColorName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex, newColorName: "" });
  };

  render() {
    const { currentColor, newColorName } = this.state;
    const { paletteIsFull, classes } = this.props;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            className={classes.colorNameInput}
            variant='filled'
            value={newColorName}
            placeholder='Color Name'
            margin='normal'
            name='newColorName'
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used"
            ]}
          />
          <Button
            className={classes.addColor}
            type='submit'
            variant='contained'
            color='primary'
            style={{
              backgroundColor: paletteIsFull ? "lightgray" : currentColor
            }}
            disabled={paletteIsFull}>
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
