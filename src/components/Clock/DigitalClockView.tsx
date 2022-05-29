import {get2digitsString, ViewClockType} from './Clock';
import React from 'react';

export const DigitalClockView: React.FC<ViewClockType> = ({date}) => {
    return <div>
        <span>{get2digitsString(date.getHours())}</span>:
        <span>{get2digitsString(date.getMinutes())}</span>:
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>;
};