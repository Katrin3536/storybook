import React, {useEffect,useState} from 'react';

export default {
    title: 'components/Clock demo',
};

export const Clock = () => {

    const [date, setDate] = useState<Date>();

    const stringTime = date?.toLocaleTimeString()

    useEffect(()=> {
        setInterval (()=> {
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <>
            Time:{stringTime}
        </>
    );
};

