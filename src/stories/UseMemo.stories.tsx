import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'components/useMemo'
};

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempREsultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10) {
                fake++;
                let fakeValue = Math.random();
            }
            tempREsultA = tempREsultA * i;
        }
        return tempREsultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result for a:{resultA}
        </div>
        <div>
            result for b:{resultB}
        </div>
    </>;
};


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>;
};
const Users = React.memo(UsersSecret);

export const HelptoReactMemo = () => {
    const [user, setUser] = useState(['Lora', 'Pam', 'Denis']);
    const [counter, setCounter] = useState(0);

    let newArray = useMemo(() => {
        return user.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [user]);

    const addUser = () => {
        const newUser = [...user, 'Sveta' + new Date().getDate()];
        setUser(newUser);
    };

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUsers</button>
            {counter}
            <Users users={newArray}/>
        </>
    );
};

export const LikeUseCallback = () => {
    const [books, setBooks] = useState(['JS', 'React', 'CSS']);
    const [counter, setCounter] = useState(0);

    let newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [books]);

    const addBook = useCallback(() => {
        const newBook = [...books, 'Angular' + new Date().getDate()];
        setBooks(newBook);
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>

            {counter}
            <Books books={newArray} addBook={addBook}/>
        </>
    );
};


const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    return <div>
        <button onClick={props.addBook}>addBook</button>
        {props.books.map((u, i) => <div key={i}>{u}</div>)}
    </div>;
};
const Books = React.memo(BooksSecret);