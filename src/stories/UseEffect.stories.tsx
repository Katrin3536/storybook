import React, {useEffect, useState} from 'react';

export default {
    title: 'components/useEffect demo',
};

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
        // api.getUsers().then('')
        // setInterval;
        // indexedDB;
        // document.getElementById();
        // document.title = 'users'
    });

    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)');
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    );
};

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    // useEffect(()=> {
    //     setTimeout (()=> {
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        const setIntervalID=setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);
        return ()=>{
            clearInterval(setIntervalID)
        }

    }, []);

    return (
        <>
            Hello, counter:{counter} - fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </>
    );
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('component rendered' + counter);

    useEffect(() => {
        console.log('Effect finished' + counter);

        return () => {
            console.log('RESET' + counter);
        };
    }, [counter]);

    const increase = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            Hello, counter:{counter}
            <button onClick={increase}>+</button>
        </>
    );
};

export const KeyTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('component rendered' + text);

    useEffect(() => {
        const handler = (e:KeyboardEvent)=> {
                console.log(e.key);
                setText(state=> state + e.key)
            }
        window.addEventListener('keypress', handler )

        return () => {
            window.removeEventListener('keypress', handler)
    }}, [])

    return (
        <>
            Typed text: {text}
        </>
    );
};

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('component rendered' + text);

    useEffect(() => {
        const setTimeOutID = setTimeout(()=>{
            setText('3 sec passed')
        }, 3000)
        return () => {
            clearTimeout(setTimeOutID)
        }
        }, [text])

    return (
        <>
            Typed text: {text}
        </>
    );
};
