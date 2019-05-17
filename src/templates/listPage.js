import React from 'react';
import './index.less';
import Layout from '../layouts';
import TagsList from '../components/tags';
import Pagination from '../components/pagination';
import SEO from '../components/SEO';

export default ({ pageContext, children }) => {
  const {
    currentPage, numPages,
    tag, tags, settings, globalSettings, contentType
  } = pageContext;
  const url = `${pageContext.pathPrefix}${currentPage === 1 ? '' : `/${currentPage}`}`;
  const seoData = Object.assign({}, settings, { url });

  return (
    <Layout>
      <main className={`index-page__content-wrapper index-page__content-wrapper--${contentType}`}>
        <SEO {...{ data: seoData, defaults: globalSettings }} />
        <ul className={`index-page__list index-page__list--${contentType}`}>
          <div className={`article-card article-card--tags article-card--tags-${contentType}`}>
            {tags.length
              ? (
                <TagsList
                  pageName={contentType}
                  current={tag}
                  tags={tags}
                />
              )
              : null}
          </div>
          { children }
        </ul>
        <hr className={`hr hr--${contentType} hr--pagination`} />
        <Pagination pages={numPages} current={currentPage} prefix={contentType} />
      </main>
    </Layout>
  );
};
