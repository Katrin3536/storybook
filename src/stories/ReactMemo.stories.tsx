import React, {useState} from 'react';

export default {
    title: 'components/React.memo demo',
};

const NewMessageCounterSecret = (props: { count: number }) => {
    return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>;
};
const Users = React.memo(UsersSecret);
const NewMessageCounter= React.memo(NewMessageCounterSecret)

export const Example1 = () => {
    const [user, setUser] = useState(['Lora', 'Pam', 'Denis']);
    const [counter, setCounter] = useState(0);
    const addUser = () => {
        const newUser = [...user, 'Sveta' + new Date().getDate()];
         setUser(newUser)
    };
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUsers</button>
            <NewMessageCounter count={counter}/>
            <Users users={user}/>
        </>
    );
};

