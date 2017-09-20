import React from 'react'
import slugify from '../utils/slugify'

const createMarkup = (path) => {

  const markdownFiles = require.context('../content/', true, /\.md$/)

  let mdPath
  let mardownCont = ''

  if (typeof path === 'string') {
    mdPath = `./${path}`
    mardownCont = markdownFiles(`./${path}`)
  } else {
    mdPath = []
    for (var value of path) {
      mdPath.push(`./${value.src}`)
      mardownCont += `<a name="${slugify(value.title)}"></a>`
      mardownCont += markdownFiles(`./${value.src}`)
    }
  }

  return mardownCont.default

};

const MarkdownPage = ({path}) => {
  const Comp = createMarkup(path)
  return <div className="content"><Comp/></div>
};

export default MarkdownPage
