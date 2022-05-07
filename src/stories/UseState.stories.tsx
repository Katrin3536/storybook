import React, {useMemo, useState} from 'react';

export default {
    title: 'components/useState demo',
};

const generateData = () => {
    return 1233153;
};

export const Example1 = () => {

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    // const changer = (state: number)=> {
    //    return state + 1
    // }

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    );
};

