const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('draggable!')
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDrag}></div>
    </div>
  )
}

export default EventComponent;