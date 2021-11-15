import styles from "./styles.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function Index() {
  const example = `
    
  # head 
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
![Tux, the Linux mascot](https://i.postimg.cc/QdQWbkw2/Snap-Camera-Photo-5-2.jpg)
  `;

  const [markdown, setMarkdown] = useState(example);

  return (
    <div>
      <h1 id="h1">Markdown Previewer</h1>
      <div id="container">
        <div id="editor-container">
          <h2>Editor</h2>
          <textarea
            id="editor"
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
          ></textarea>
        </div>
        <div id="preview-container">
          <h2 id="h2">Preview</h2>
          <div id="preview">
            <ReactMarkdown source={markdown} id="preview" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
