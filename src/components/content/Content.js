
/*
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";*/
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import AnimatedLetters from "./AnimatedLetters";
import './index.scss'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
}));

export const Content = () => {
 const classes = useStyles();
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ' Eduardo Quiroga'.split('')
  const jobArray = 'Full-Stack Developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <Container component="main" className={classes.main} maxWidth="md">
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <p><AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          /></p>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
          <br />
        </h1>
        <h2>
          Web - Software - UX/UI
        </h2>
        <a href="#contact" 
        className="flat-button"
        >CONTACT ME</a>
      </div>
    </div>
    </Container>
  </>
/*    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
            <TextDecrypt text={`${Resume.basics.job1} + `} />
            <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
      </div>
    </Container>*/
  );
};

export default Content