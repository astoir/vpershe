import React from 'react';
import './index.less';
import TagsList from '../components/tags';
import Pagination from '../components/pagination';
import SEO from '../components/SEO';

export default props => {
  const {
    index, pageCount,
    additionalContext: {
      tag, tags, settings, globalSettings, contentType
    }
  } = props.pathContext;
  const url = `${props.pathContext.pathPrefix}${index === 1 ? '' : `/${index}`}`;
  const seoData = Object.assign({}, settings, { url });

  return (
    <main className={`index-page__content-wrapper index-page__content-wrapper--${contentType}`}>
      <SEO {...{ data: seoData, defaults: globalSettings }} />
      <ul className={`index-page__list index-page__list--${contentType}`}>
        <div className={`article-card article-card--tags article-card--tags-${contentType}`}>
          {tags.length
            ? <TagsList
              pageName={contentType}
              current={tag}
              tags={tags}
            />
            : null}
        </div>
        { props.children }
      </ul>
      <hr className={`hr hr--${contentType} hr--pagination`} />
      <Pagination pages={pageCount} current={index} prefix={contentType} />
    </main>
  );
};
