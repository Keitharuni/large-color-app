import sizes from "./sizes";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    // svgbackgrounds.com can create a new background 1. download svg as seperate file 2. make sure to attribute it /* background by SVGBackgrounds.com */ 3. paste it into bg.svg 4. import bg from './bg.svg 5. backgroundImage: `url(${bg})` 6. set background color of whatever svg you get
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "80%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1rem",
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "0.7rem"
    }
  },
  button: {
    '&:hover': {
      backgroundColor: '#eef0f1'
    }
  }
};
