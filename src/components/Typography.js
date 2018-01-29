import React from 'react'
import ReactDOM from 'react-dom'
import Config from '../content/config.yaml'

const styleImport = Config.imports.css
const jsImport = Config.imports.js

let styleFiles = '', jsFiles = ''

let initialContent;

class Typography extends React.Component {

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

    htmlString = `
      <div>${this.props.typeface}</div>
      <div style="display: flex;">
          <div style="width:20%; font-size:100px; padding: 0 0 0 20px">Aa</div>
          <div>
             <div><h1>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1></div>
             <div><h2>abcdefghijklmnopqrstuvwxyz</h2></div>
             <div><h2>0 1 2 3 4 5 6 7 8 9</h2></div>
          </div>
      </div>
    `;

    initialContent = `<!DOCTYPE html><html><head>${styleFiles}</head><body><div>${htmlString}</div>${jsFiles}</body></html>`

    return initialContent
  }

  render() {
    return <iframe title="ep" className="project-example" style={{height:this.state.iFrameHeight}} frameBorder="0" srcDoc={this.buildMarkup()}></iframe>
  }

};

export default Typography
