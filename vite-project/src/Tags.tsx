interface TagsProps {
  tags:string[] 
}

function Tags (props:TagsProps) {
  let result= []
  for(let i=0; i<props.tags.length; i++) {
    result.push (<div className='tag'>{props.tags[i]}</div>)
  }
  return result
}

export default Tags


