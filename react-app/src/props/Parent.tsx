import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="green" onClick={() => console.log('clicked!')}>
      djkfjddkjh
    </ChildAsFC>
  )
}

export default Parent;