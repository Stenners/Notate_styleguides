import React from 'react'
import MarkdownPage from '../components/Markdown'
import FourOhFour from '../components/FourOhFour'

const Page = (props) => {
  let pageContent = props.content.find((x => x.slug === props.page));

  let markdown = pageContent.content;
  let main;
  if (markdown) {
    main = <MarkdownPage path={markdown} />
  } else {
    main = <FourOhFour />
  }

  return (
    <div className="main">
      {main}
    </div>
  );
};

export default Page
