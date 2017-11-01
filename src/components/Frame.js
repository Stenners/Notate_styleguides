import React from 'react'
import ReactDOMServer from 'react-dom/server';

const Frame = (props) => {

  //const children = props.children;
  // //


  // const htmlString = props.children.map((child) => {
  //   return ReactDOMServer.renderToStaticMarkup(child);
  // })
  // 
  let htmlString;
  for (let child of props.children) {
    htmlString += ReactDOMServer.renderToStaticMarkup(child);
  }
  console.log(props.initialContent)
  console.log(htmlString)

  return (
    <iframe title="example-code" srcDoc={props.initalContent}>
    </iframe>
  )
}

export default Frame
