import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ slug, imageData, title, description, url, github }) => (
    <div className="project-preview">
        <Link to={`/${slug}`}>
            <Image fluid={imageData} alt={title} />
        </Link>
        <h2>
            Try out <a href={url}>{title}</a>
        </h2>
        <p>{description}</p>
        <a href={github}>View on Github &rarr;</a>
    </div>
);

export default ProjectPreview;