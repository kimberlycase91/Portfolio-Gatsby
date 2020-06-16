import React from 'react';
import Img from 'gatsby-image';


const About = ({ imageData }) => {
    return (
        <div className="bio">
            <h3>About Me</h3>
            <div id="aboutMe">

            {/* <div id="bio">
                <p id="short-bio">
                    My name is <b class="front-page-name">Kimberly Case.</b>
                    I am a <span id="title">full-stack web developer</span> 
                    based in Chandler,
                    Arizona.</p>
            </div> */}
                <div id="image">
                    <Img fluid={imageData} alt="profile-photo"
                        style={{
                            width: '250px',
                            maxwidth: '250px',
                            display: 'inline-block',
                            float: 'left'
                        }} />
                </div>
                <div className="bio" 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingLeft: '15px'
                }}
                >
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
        </div>
    )
};

export default About;