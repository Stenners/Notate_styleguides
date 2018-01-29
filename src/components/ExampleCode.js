import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Config from '../content/config.yaml'

const styleImport = Config.imports.css
const jsImport = Config.imports.js
let styleFiles = '', jsFiles = ''

let initialContent;

class ExampleCode extends React.Component {

  constructor() {
    super()
    this.state = {
      iFrameHeight: '0px'
    }
  }

  componentDidMount() {
    const obj = ReactDOM.findDOMNode(this)
    obj.addEventListener('load', () => {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px'
    })
  }
  
  buildMarkup() {

    let htmlString = '';

    for (let value of styleImport) {
      styleFiles += `<link rel="stylesheet" href="${value.src}" />`
    }

    for (let value of jsImport) {
      jsFiles += `<script src="${value.src}"></script>`
    }

    if (this.props.children.hasOwnProperty('type')) {
      htmlString = ReactDOMServer.renderToStaticMarkup(this.props.children);
    } else {
      for (let child of this.props.children) {
        htmlString += ReactDOMServer.renderToStaticMarkup(child);
      }
    }

    styleFiles = '';
    jsFiles = '';

    initialContent = `<!DOCTYPE html><html><head>${styleFiles}</head><body><div>${htmlString}</div>${jsFiles}</body></html>`

    return initialContent
  }

  render() {
    return <iframe title="ep" className="project-example" style={{height:this.state.iFrameHeight}} frameBorder="0" srcDoc={this.buildMarkup()}></iframe>
  }
  
};


export default ExampleCode
