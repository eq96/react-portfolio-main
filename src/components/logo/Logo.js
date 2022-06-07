import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000"  preserveAspectRatio="xMidYMid meet" className={classes.svgHover}>  <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none"> <path d="M100 239 c-14 -4 -20 -7 -13 -8 15 -1 -3 -61 -19 -61 -5 0 -7 -4 -4 -9 3 -5 1 -23 -5 -41 -7 -18 -8 -35 -3 -40 11 -11 54 -2 54 10 0 5 -10 6 -22 2 -18 -4 -20 -2 -15 19 4 13 7 30 7 37 0 6 8 12 19 12 13 0 20 -9 25 -30 3 -16 10 -30 16 -30 7 0 8 6 0 19 -14 27 -13 41 5 41 8 0 15 5 15 11 0 5 -4 7 -10 4 -13 -8 -13 11 0 36 6 11 21 19 35 19 21 0 25 -5 25 -30 0 -58 -41 -111 -94 -124 -20 -5 -26 -10 -19 -17 8 -8 18 -7 33 1 13 7 54 10 106 8 46 -2 84 0 84 5 0 7 -72 12 -125 8 l-30 -3 23 24 c26 28 45 84 36 110 -4 14 0 18 20 18 14 0 26 5 26 10 0 12 -128 11 -170 -1z m40 -14 c0 -16 -25 -55 -36 -55 -10 0 -11 7 -3 30 6 17 17 30 25 30 8 0 14 -2 14 -5z"/> </g> </svg> 

 /*    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <rect className="cls-1" x="0.47" y="31.33" width="9.9" height="133.85" rx="3.75"/>
            <rect className="cls-1" x="133.62" y="57.1" width="9.9" height="108.08" rx="3.75"/>
            <rect className="cls-1" x="30.39" y="21.71" width="9.9" height="112.54" rx="3.75" transform="translate(-38.83 35.21) rotate(-35.65)"/>
            <rect className="cls-1" x="90.6" y="-17.08" width="9.9" height="201.44" rx="3.75" transform="translate(65.78 -39.81) rotate(35.24)"/>
            <rect className="cls-1" x="78.17" y="39.68" width="9.9" height="201.55" rx="3.75" transform="translate(96.28 -22.22) rotate(35.24)"/>
          </g>
        </g>
      </svg>*/
    );
};
