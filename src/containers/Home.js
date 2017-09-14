import React from 'react'

const Home = (props) => {
  console.log(props)
  return (<div className="main">
    <h1>{props.content.title}</h1>
  </div>);
};

export default Home
