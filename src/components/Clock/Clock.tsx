import {useEffect, useState} from 'react';
import { AnalogClockView } from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';

export const get2digitsString = (num: number) => {
    return num < 10 ? '0' + num : num;
};

export type ClockType = {
    mode: 'Analog' | 'Digital'
}
export const Clock = (props: ClockType) => {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let iD = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(iD);
        };
    }, []);

    let view;
    switch (props.mode) {
        case 'Analog':
            view = <AnalogClockView date={date}/>;
            break;
        case 'Digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>;
};

export type ViewClockType = {
    date: Date
}


