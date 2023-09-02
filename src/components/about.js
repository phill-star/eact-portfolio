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
  <p class="lead">"Experienced and dedicated tech professional with a strong background in web applications and production support spanning over a year. Known for being proactive, resourceful, and persistent in tackling challenges. Adept at effective communication and skilled in client relationship management.
    Education includes a Bachelor of Arts in Psychology from Metropolitan State University, Minnesota. Additionally, I am in the process of completing a certificate in full-stack web development at the University of Denver Colorado, with an expected completion date in October 2023."..</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://profile.indeed.com/document/view
           " style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default About;