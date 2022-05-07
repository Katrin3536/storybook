import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'components/useEffect demo',
};

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(()=> {
        console.log("useEffect every render");
        document.title = counter.toString();
        // api.getUsers().then('')
        // setInterval;
        // indexedDB;
        // document.getElementById();
        // document.title = 'users'
    })

    useEffect(()=> {
        console.log("useEffect only first render(componentDidMount)");
        document.title = counter.toString()}, [])

    useEffect(()=> {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    );
};

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    // useEffect(()=> {
    //     setTimeout (()=> {
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(()=> {
        setInterval (()=> {
            setCounter(state=> state +1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter:{counter} - fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
    );
};

