import { memo, useState } from "react"
// import { action } from '@storybook/addon-actions'

export default {
  title: 'React Memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
  console.log('USERS');
  return <div>
    {props.users.map((user, i) => <div key={i}>{user}</div>)}
  </div>
}

const Users = memo(SecretUsers)

export const Example1 = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['Masha', 'Stas', 'Vika']);


  const AddUser = () => {
    setUsers([...users, 'Lena ' + new Date().getTime()])
  }

  return (
    <>
      <div>
        <NewMessagesCounter count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <Users users={users} />
        <button onClick={AddUser}>Add user</button>
      </div>
    </>
  )
}