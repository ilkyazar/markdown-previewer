const Preview = ({ preview }) => {
  return (
    <div className="column">
      <h2 className="column-header">Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={preview} />
    </div>
  );
};

export default Preview;
