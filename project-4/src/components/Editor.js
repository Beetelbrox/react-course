import React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const Editor = (props) => {
    const [selectedTab, setSelectedTab] = React.useState("write");
    return (
        <ReactMde className="editor"
            value={props.note.body}
            onChange={props.markdownChangeHandler}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
                Promise.resolve(converter.makeHtml(markdown))
            }
        />
    );
};

export default Editor