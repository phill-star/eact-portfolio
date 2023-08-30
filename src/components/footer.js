import React from 'react'; 

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div class="footer" id="footer">
            <a href="ttps://www.linkedin.com/in/mohamed-hussein-569aa828a//"><img src="" alt="LinkedIn" style={imgStyle}></img></a>
            <p style={copyStyle}>© Mohamed Hussein 2023</p>
            <a href="https://github.com/phill-star?tab=repositories"><img src="" alt="Github" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer;