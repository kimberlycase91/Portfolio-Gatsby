import React from "react";
import Layout from "../components/layout";
import About from "../components/about";
import { graphql, useStaticQuery } from 'gatsby';



const BioPage = () => {
  const data = useStaticQuery(graphql`
  {
    file(id: {eq: "1ccdc7d2-6f67-541f-95d1-c446bc52c396"}) {
      childImageSharp {
        fluid (maxWidth: 250, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
const imageData = data.file.childImageSharp.fluid
  return (
    <Layout>
          <About imageData={imageData} />
    </Layout>
  )
}
export default BioPage
