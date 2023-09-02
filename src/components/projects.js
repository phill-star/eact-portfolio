import React from 'react';

const info = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}

const titleStyle = {
    backgroundColor: 'gray',
    padding: '10px',
    color: 'white',
}

const yellowLinkStyle = {
    color: 'yellow', 
}

const greenLinkStyle = {
    color: 'green', 
}

function ProjectCards(props) {
    return (
        <div className="card">
            {}

            <div className="cardContent">
                <h2 className="projectTitle" id="projectTitle" style={titleStyle}>{props.name}</h2>

                <div className="img-container">
                    <img className="projectImage" alt={props.name} src={props.image}/>
                </div>

                <p className="projectInfo" id="projectInfo" style={info}>
                    <button className="btn btn-dark"><a href={props.deploy} style={greenLinkStyle}>Deployed Application</a></button>
                    <br></br>
                    <button className="btn btn-dark"><a href={props.github} style={yellowLinkStyle}>Application Repository</a></button>
                </p>
                <p className="technologies">
                    <h4>Techologies Used: </h4>
                    {props.technologies}
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;
