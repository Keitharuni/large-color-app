import sizes from './sizes';

export default {
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: "-0.1rem",
    [sizes.down('xs')]: {
      display: 'none',
      height: 0
    }
  },

  paletteEmoji: {
    fontSize: "1rem",
    margin: "0 1rem",
    marginTop: "-0.3rem",
    [sizes.down('xs')]: {
      display: 'none'
    }

  }
};
