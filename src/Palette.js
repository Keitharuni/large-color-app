import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorboxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        showingFullPalette={true}
        singlePage={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar
          level={level}
          showingAllColors={true}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className={classes.paletteColors}>{colorboxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
