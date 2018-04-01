import React from 'react'
import Link from 'gatsby-link'

import NavBar from "../components/Nav/Nav";

import "./archive.less";

const ArchivePage = ({data}) => {
  const articles = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
  
  const categories = groupByCategory(articles, "category").map(c => addCategory(c));
  
  return (
      <div>
          <NavBar />
          <div className='container'>
              <div className="row">
                  <h1 className='text-center'>Архів</h1>

                  <div className="col-xs-12">
                      <div className="panel-body">
                          {categories}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

const addCategory = (category) => {
  const posts = category.articles.map((a) => addPost(a));

  return (
    <div>
      <h3>{category.name}</h3>
      <ul className="article-list">{posts}</ul>
    </div>
  )};


const addPost = (article) => {
  return (
	  <li className="article-item">
        <Link to={"/articles/"+ article.path}>{ article.title }</Link>
	  </li>
  )
};

const groupByCategory = (items, key) =>{ 
    let groups = [];
    items.forEach(
      (item) => {
        var category = groups.find(r => r.name === item[key]);
        if(category)
        {
          category.articles.push(item);  
        } else {
          groups.push({
            name: item[key],
            articles: [item]
          })
        }
      });
      return groups;
};

export default ArchivePage

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              category
              tags        
            }
          }
        }      
    }
  }
`;

