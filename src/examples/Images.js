import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/beach.jpeg';
import Image from 'gatsby-image';

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "desert.jpeg"}) {
      childImageSharp {
        fixed(width: 200, grayscale:true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "ocean.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
  `;
const Images = () => {
    const data = useStaticQuery(getImages);

    return <section className="images">
        <article className="single-image">
            <h3>basic image</h3>
            <img src={img} width="100%" />
        </article>
        <article className="single-image">
            <h3>fixed image/blur</h3>
            <Image fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article className="single-image">
            <h3>fluid image/svg</h3>
            <Image fluid={data.fluid.childImageSharp.fluid} />
            <div className="small">
                <Image fluid={data.fluid.childImageSharp.fluid} />
            </div>
        </article>
    </section>
}

export default Images
