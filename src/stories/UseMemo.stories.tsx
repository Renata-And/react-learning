import { memo, useMemo, useState } from "react"

export default {
  title: 'useMemo'
}

export const DifficultCountingExample = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let index = 1; index <= a; index++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        // const fakeValue = Math.random() * 5;
      }
      tempResultA = tempResultA * index
    }

    return tempResultA;
  }, [a])


  for (let index = 1; index <= b; index++) {
    resultB = resultB * index
  }

  return <>
    <input value={a} onChange={(e) => { setA(Number(e.currentTarget.value)) }} />
    <input value={b} onChange={(e) => { setB(Number(e.currentTarget.value)) }} />
    <div>
      Result for a: {resultA}
    </div>
    <div>
      Result for b: {resultB}
    </div>
  </>
}

const SecretUsers = (props: { users: Array<string> }) => {
  console.log('USERS');
  return <div>
    {props.users.map((user, i) => <div key={i}>{user}</div>)}
  </div>
}

const Users = memo(SecretUsers)

export const HelpsToReactMemo = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['Masha', 'Stanislav', 'Viktoria', 'Lev']);

  console.log('HelpsToReactMemo')

  const newArray = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf('a') > -1);
  }, [users])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setUsers([...users, 'Elena' + new Date().getTime()])}></button>
      <Users users={newArray} />
    </>
  )
}

