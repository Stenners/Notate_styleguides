import React from 'react'
import ReactDOM from 'react-dom'
import Frame from 'react-frame-component'
import Config from '../content/config.yaml'

const styleImport = Config.imports.css
let styleFiles = ''

for (let value of styleImport) {
  styleFiles += `<link rel="stylesheet" href="${value.src}" />`
}

const typoStyle = {
  display: 'flex',
  justifyContent: 'spaceBetween'
}
const glyph = {
  width: '20%',
  fontSize: '100px',
  padding: '0 0 0 20px'
}

const initialContent = `<!DOCTYPE html><html><head>${styleFiles}</head><body><div></div></body></html>`

class Typography extends React.Component {

  componentDidMount() {
    const obj = ReactDOM.findDOMNode(this)
    obj.addEventListener('load', () => {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px'
    })
  }

  render() {
    return (
      <Frame className="project-example" frameBorder="0" initialContent={initialContent}>
        <div>{this.props.typeface}</div>
        <div style={typoStyle}>
          <div style={glyph}>Aa</div>
          <div>
            <div><h1>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1></div>
            <div><h2>abcdefghijklmnopqrstuvwxyz</h2></div>
            <div><h2>0 1 2 3 4 5 6 7 8 9</h2></div>
          </div>
        </div>
      </Frame>
    )
  }

};

export default Typography
