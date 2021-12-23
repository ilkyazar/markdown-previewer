const Editor = (props) => {
  return (
    <div className="column editor">
      <h2 className="column-header">Editor</h2>
      <textarea id="editor" onChange={props.onChange} value={props.markdown} />
    </div>
  );
};

export default Editor;
