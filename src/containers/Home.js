import React from 'react'
import MarkdownPage from '../components/Markdown'

const Home = (props) => {
  const content = props.content
  return (
    <div className="main">
      <div className="hero">
        <h1>{content.title}</h1>
        <h2>{content.description}</h2>
      </div>
      <MarkdownPage path={'pages/home.md'} />
    </div>
  )
}

export default Home
