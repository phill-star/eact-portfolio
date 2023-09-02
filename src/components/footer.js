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
            <a href="ttps://www.linkedin.com/in/mohamed-hussein-569aa828a//"><img src="https://github.com/phill-star/Mohameds-portfolio/assets/130422301/a3519932-598e-42b8-af4e-07358ee91765" alt="LinkedIn" style={imgStyle}></img></a>
            <p style={copyStyle}>© Mohamed Hussein 2023</p>
            <a href="https://github.com/phill-star?tab=repositories"><img src="https://github.com/phill-star/Mohameds-portfolio/assets/130422301/626eb5c5-1777-4442-917f-55aa17f87cd4" alt="Github" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer;