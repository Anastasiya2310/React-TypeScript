import { useState, useRef, useEffect } from 'react';

const users = [
  {
    name: 'Sarah',
    age: 20
  },
  {
    name: 'Alex',
    age: 23
  },
  {
    name: 'Jason',
    age: 35
  },
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [nameUser, setNameUser] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();

  useEffect(() => {
    if(!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === nameUser;
    });
    setUser(foundUser);
  }

  return (
    <div>
      User Search
      <input 
        ref={inputRef} 
        value={nameUser} 
        onChange={e => setNameUser(e.target.value)}
      />
      <button onClick={onClick}>Search name</button>
      <div>
        <h4>User name: {user && user.name}</h4>
        <h5>User age: {user && user.age}</h5>
      </div>
    </div>
  )
}

export default UserSearch;