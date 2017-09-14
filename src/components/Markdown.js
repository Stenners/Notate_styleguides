import React from 'react'
import slugify from '../utils/slugify'

const createMarkup = (path) => {
  let mdPath;
  let mardownCont = '';
  
  const markdownFiles = require.context('../content/', true /* search subdirectories */, /\.md$/);

  if (typeof path === 'string') {
    mdPath = `./${path}`;
    mardownCont = markdownFiles(`./${path}`);
  } else {
    mdPath = [];
    for (var value of path) {
      mdPath.push(`./${value.src}`);
      mardownCont += `<a name="${slugify(value.title)}"></a>`;
      mardownCont += markdownFiles(`./${value.src}`);
    }
  }

  return { __html: mardownCont }

};

const MarkdownPage = ({path}) => {
  return <div dangerouslySetInnerHTML={createMarkup(path)} />
};

export default MarkdownPage
