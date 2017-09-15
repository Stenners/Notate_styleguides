import React from 'react'
import MarkdownPage from '../components/Markdown'
import FourOhFour from '../components/FourOhFour'

const Page = (props) => {
  console.log(props);
  let pageContent = props.content.find((x => x.slug === props.page));
  console.log(pageContent);
  
  let markdown = pageContent.content;
  let main;
  if (markdown) {
    main = <MarkdownPage path={markdown} />
  } else {
    main = <FourOhFour />
  }

  return (
    <div className="main">
      <h1>{pageContent.title}</h1>
      {main}
    </div>
  );
};

export default Page
