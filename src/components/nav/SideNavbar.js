/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";
import { SettingsApplications } from "@material-ui/icons";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#home" 
        onClick={() => setActiveNav('#home')}
        onScroll={() => activeNav === '#home' ? 'active' : ''}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <Typography>
          Home
        </Typography>
      </a>
      <a href="#works"
        onClick={() => setActiveNav('#works')}
        className={activeNav === '#works' ? 'active' : ''}
      >
        <Typography>
          Projects
        </Typography>
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography>
          About
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>
          Contact
        </Typography>
      </a>
    </nav>
  );
};

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(window.scrollY);
    if(window.scrollY >= sectionTop){
      current = section.getAttribute('id');
    }
  })
  console.log(window.scrollY);
  if(window.scrollY >= 3367) {
    document.querySelector('nav a[href*="contact"]').classList.add('active')

    document.querySelector('nav a[href*="works"]').classList.remove('active')
    document.querySelector('nav a[href*="about"]').classList.remove('active')
    document.querySelector('nav a[href*="home"]').classList.remove('active')
  } else if (window.scrollY >= 2567 && window.scrollY <= 3366) {
    document.querySelector('nav a[href*="about"]').classList.add('active')

    document.querySelector('nav a[href*="works"]').classList.remove('active')
    document.querySelector('nav a[href*="home"]').classList.remove('active')
    document.querySelector('nav a[href*="contact"]').classList.remove('active')
    console.log ('ABOUT SCROLL')
  } else if (window.scrollY >= 818 && window.scrollY <= 2566) {
    document.querySelector('nav a[href*="works"]').classList.add('active')

    document.querySelector('nav a[href*="home"]').classList.remove('active')
    document.querySelector('nav a[href*="about"]').classList.remove('active')
    document.querySelector('nav a[href*="contact"]').classList.remove('active')
    console.log('WORKS SCROLL')
  } else if (window.scrollY >= 0 && window.scrollY <= 817) {
    document.querySelector('nav a[href*="home"]').classList.add('active')

    document.querySelector('nav a[href*="works"]').classList.remove('active')
    document.querySelector('nav a[href*="about"]').classList.remove('active')
    document.querySelector('nav a[href*="contact"]').classList.remove('active')
    console.log('HOME SCROLL')
  }
})