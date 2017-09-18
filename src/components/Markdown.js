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

  //return { __html: mardownCont }
  return mardownCont.default
  //return markdownFiles(`./${path}`).default;

};

const MarkdownPage = ({path}) => {
  const Comp = createMarkup(path);
  //return <div dangerouslySetInnerHTML={createMarkup(path)} />
  return <Comp />
  //return <MarkdownComponent name={'Bob'}/>
};

export default MarkdownPage
