import "./App.scss";
import React from "react";
import { marked } from "marked";
import Prism from "prismjs";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import initialInputValue from "./lib/init";

// Markdown previewer interprets carriage returns and renders them as br
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialInputValue,
      preview: marked(initialInputValue),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      preview: marked(e.target.value),
    });
  }

  render() {
    return (
      <div className="container">
        <Editor onChange={this.handleChange} markdown={this.state.input} />
        <Preview preview={{ __html: this.state.preview }} />
      </div>
    );
  }
}

export default App;
