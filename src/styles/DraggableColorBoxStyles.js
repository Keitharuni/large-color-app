import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
    root: {
      width: "20%",
      height: "25%",
      margin: "0 auto",
      cursor: "pointer",
      display: "inline-block",
      position: "relative",
      marginBottom: "-5.2px",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.1)"
      },
      [sizes.down('lg')]: {
        width: '25%',
        height: '20%'
      },
      [sizes.down('md')]: {
        width: '50%',
        height: '10%'
      },
      [sizes.down('sm')]: {
        width: '100%',
        height: '5%'
      },

    },
    boxContent: {
      position: "absolute",
      width: "100%",
      left: 0,
      bottom: 0,
      paddingLeft: "5px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between",
      color: props =>
      chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)"
    },
    deleteIcon: {
      transition: "all 0.3s ease-in-out"
    }
  };

  export default styles;