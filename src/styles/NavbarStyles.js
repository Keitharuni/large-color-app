import sizes from "./sizes";

export default {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    [sizes.down("xs")]: {
      height: "12vh"
    }
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#b3aaaa46",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#000000"
    },
    [sizes.down("xs")]: {
      fontSize: "13px"
    }
  },

  /* Future make slider handle change color depending on what level the slider bar is on ie(green slider-handle: level 100, red slider-handle: level 200 and so on) A Gradient would be best!!!! */
  slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",
    [sizes.down("md")]: {
      width: "150px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "5px"
    },
    " & .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
      backgroundColor: "mediumseagreen",
      border: "2px solid mediumseagreen",
      outline: "none",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-4px"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "10px"
  }
};
