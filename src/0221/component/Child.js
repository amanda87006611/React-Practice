function Child(props) {
  console.log(props)

  return (
    <>
      {props.name}, {props.text}
    </>
  )
}

Child.defaultProps = {
  text: 'HIHI',
  name: 'aaaa',
}

export default Child
