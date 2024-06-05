import React, { Component } from 'react';
import "./About.css";
import profile_image from '../assets/profile_image.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <img src={profile_image} className='profile_image' />
        <p className='name_title'>Hi, I'm Alex</p> 
        <p className='brief_description'>{'I am a rising Junior studying Math, Stats and Computer Science at the University of Illinois at Urbana-Champaign. I am especially interested in compilers and all manner of systems programming. Besides courses, I am an undergraduate TA (currently for the data structures class, but I have also been involved with other courses like the algorithms course), am a lead for the SIG for math/theory under UIUC\'s chapter of ACM, and do research on applying compiler methodologies to data science. I am currently interning at Box.'}</p>
        <p className='brief_description'>{'Outside of all of this, I like to run, learn something each day, stay up to date with world news, tinker with Linux, play video games (which I never seem to have time for 😡), and hang out with friends.'}</p> 
      </div>
    )
  }
}