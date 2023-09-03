import React from 'react';

const imgStyle = {
    padding: '20px'
}

const linkStyle = {
    color: 'white'
}

function About() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">About Me</h1>
  <img class="headshot" src="https://github.com/phill-star/react-portfolio/assets/130422301/a9998c58-3da1-4cfa-9f28-8b6030f46fcb" alt="headshot" style={imgStyle}></img>
  <p class="lead">"In my journey as a developer, I have continually sought opportunities for growth and learning. With each project I undertake, I not only aim to deliver high-quality solutions but also to push the boundaries of my own knowledge and skill set. This commitment to personal and professional development has led me to explore new horizons in the tech world. I'm deeply intrigued by the ever-evolving landscape of cybersecurity and its critical role in safeguarding digital assets. This dedication to staying at the forefront of technology is a testament to my proactive, resourceful, and persistent approach in tackling challenges. As I embark on this exciting journey into cybersecurity through enrollment in a specialized bootcamp, I'm eager to merge my existing expertise with the specialized knowledge I'll gain, creating a unique blend of skills that will set me apart in the field."</p>
  <hr class="my-4"></hr>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://profile.indeed.com/document/view
           " style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default About;
