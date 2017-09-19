import React from 'react'
import ReactDOM from 'react-dom'
import Frame from 'react-frame-component'
import Config from '../content/config.yaml'

const styleImport = Config.imports.css
const jsImport = Config.imports.js
let styleFiles = '', jsFiles = ''

for (let value of styleImport) {
  styleFiles += `<link rel="stylesheet" href="${value.src}" />`
}
for (let value of jsImport) {
  jsFiles += `<script src="${value.src}"></script>`
}

console.log(styleFiles, jsFiles)

let initialContent = `<!DOCTYPE html><html><head>${styleFiles}</head><body><div></div>${jsFiles}</body></html>`

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
  
  render() {
    return <Frame className="project-example" style={{height:this.state.iFrameHeight}} frameBorder="0" initialContent={initialContent}>{this.props.children}</Frame>
  }
  
};


export default ExampleCode
