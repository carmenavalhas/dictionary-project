export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="examples">
        <span className="examples-title">Example: </span>
        {props.examples}
      </div>
    );
  } else {
    return null;
  }
}