import React from 'react'
import ReactDOM from 'react-dom'
import Frame from 'react-frame-component'
import Config from '../content/config.yaml'

const imports = Config.imports
for (let value of imports) {
  console.log(value);
}

let initialContent = `<!DOCTYPE html><html><head><link rel="stylesheet" href="${imports[0].css}" /></head><body><div></div></body></html>`

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
    return <Frame style={{width:'100%', margin:'2rem 0', height:this.state.iFrameHeight, overflow:'auto'}} frameBorder="0" initialContent={initialContent}>{this.props.children}</Frame>
  }
  
};


export default ExampleCode
