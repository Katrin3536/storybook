import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import { Clock, ClockType } from './Clock';

export default {
    title: 'components/Clock',
    component: Clock,
        }


export const BaseExample: Story<ClockType> = (args) => {
    const [date, setDate] = useState(new Date());
    return <Clock {...args}/>;
};





