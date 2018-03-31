import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import translit from 'cyrillic-to-translit-js'

export default function Template ({ data }) {
  const post = data.markdownRemark.frontmatter;
  const ukTranslit = translit({ preset: "uk" }).transform;
  return (
    <div>
      <h1>{post.title}</h1>
      <div>Category: <Link to={`/categories/${ukTranslit(post.category)}`}>{post.category}</Link></div>
      <div className="content" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
    </div>
  )
}

export const pageQuery = graphql`
  query ArticleByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        category
        title
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`
