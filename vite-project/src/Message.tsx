function Message(props){
  // const name = 'Vik';
  if (props.name)
    return <h1>Hello {props.name}</h1>;
  return <h1>Hello Somebody</h1>
}
export default Message