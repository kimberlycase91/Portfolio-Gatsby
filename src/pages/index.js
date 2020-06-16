import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
     {
      allProjectsJson {
        edges{
          node{
            title
            slug
            description
            url
            github
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const url = project.url;
        const github = project.github;
        const imageData = project.image.childImageSharp.fluid;

        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            url={url}
            github={github}
            imageData={imageData}
          />
        )
      })}
    </Layout>
  )
}
export default PortfolioPage
