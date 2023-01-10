import React, { useState } from "react";
import Markdown from "marked-react";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const defaultText =
    "# Say hello to this nice Markdown Previewer \n## Type in all the Markdown you want \n\nHere's some example markdown: \n\nYou can do a list like this and emphasize items by making them bold or italic: \n\n- First item \n- **Second item** \n- _Third item_ \n\nAdd some links: [links](https://findtheinvisiblecow.com/) \n\nDo some coding: \n\n`<div>Hello World!</div>` \n\n```\nfunction reverseString(string) {\n var split = string.split('');\n var reverse = split.reverse();\n return reverse.join('');};\n``` \n\n> Quote some stuff! \n\nor show an image: \n\n![nice image here](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeilGiqSt9ws-hKOFREBUD_8NjhHfUSx6ww&usqp=CAU) \n\n**Have fun!**";

  const [markdown, setMarkdown] = useState(defaultText);
  const [fullEditor, setFullEditor] = useState(false);
  const [fullPreview, setFullPreview] = useState(false);

  return (
    <div className="app">
      <div id="editField" className={fullPreview ? "hide" :  null}>
        <div className="header">
          <FontAwesomeIcon icon={faPenAlt} /> Editor
          <div className="icon">
            <FontAwesomeIcon icon={fullEditor ? faUpRightAndDownLeftFromCenter : faMaximize} onClick={()=> setFullEditor(!fullEditor)}/>
          </div>
        </div>
        <textarea
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
          name="markdown"
          id="editor"
          cols="72"
          rows="15"
          className={fullEditor ? "fullView" : null}
        />
      </div>
      <div id="previewField" className={fullEditor ? "hide" : fullPreview ? "fullView" : null}>
        <div className="header">
          <FontAwesomeIcon icon={faEye} /> Markdown Previewer
          <div className="icon">
            <FontAwesomeIcon icon={fullPreview? faUpRightAndDownLeftFromCenter : faMaximize} onClick={()=> setFullPreview(!fullPreview)}/>
          </div>
        </div>
        <div id="preview">
          <Markdown value={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;
