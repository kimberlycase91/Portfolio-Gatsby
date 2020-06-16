import React from 'react';
import Img from 'gatsby-image';


const About = ({ imageData }) => {
    return (
        <div className="bio">
            <div id="image"
             style={{
                width: '250px',
                maxwidth: '250px',
                display: 'inline-block',
                float: 'left'
            }}
            >
                <Img fluid={imageData} alt="profile-photo" />
            </div>

            <div id="aboutMe"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                paddingLeft: '15px'
            }}
            >
                <h3>About Me</h3>
                <p>I am a web developer leveraging a background as a math and science teacher to contribute to an
                increasingly better UI/UX experience. Recently earned a certificate in Full Stack Development from
                the University of Arizona, with newly developed skills in CSS, JavaScript, React.js, and
        responsive web design.</p>

                <p>As a teacher I have gained many transferable skills including strong written and oral communication,
                collaborating with colleagues, being flexible and adaptable, and being data-driven. Known as an
    organized, self-motivated problem-solver. </p>

                <p>Passionate about balancing functionality and design with an emphasis on accessibility. Equipped with
                working collaboratively with a like-minded team to ensure optimal results for user-centered and
                technology-centered designs.</p>
            </div>
        </div>
    )
};

export default About;