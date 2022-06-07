/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'
import AnimatedLetters from "../content/AnimatedLetters";
import '../content/index.scss'

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetings = 'Hi.'.split('')
  const aboutme = `I'm Eduardo Quiroga, a Full-Stack Developer and designer.`.split('')


  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
            <AnimatedLetters
            letterClass={letterClass}
            strArray={greetings}
            idx={15}
          />
            </Typography>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutme}
            idx={15}
          />

            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span' style={{color: "white"}}> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

/*            <p className="aboutme">
              {aboutme}
            </p>*/