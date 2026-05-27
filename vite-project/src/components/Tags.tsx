import "../scss/Tags.scss";

interface TagsProps {
  tags: string[] | undefined;
}

function Tags(props: TagsProps) {
  if (props.tags != undefined) {
    const tags = props.tags;
    let result = [];
    for (let i = 0; i < tags.length; i++) {
      result.push(
        <div key={i}>
          <div className="tag">{tags[i]}</div>
        </div>,
      );
    }
    return result;
  }
}
export default Tags;
