import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import { Clock, ClockType } from './Clock';

export default {
    title: 'components/Clock',
    component: Clock,
        }


export const BaseAnalogExample: Story<ClockType> = (args) => {
    return <Clock mode={'Analog'}/>;
};

export const BaseDigitalExample: Story<ClockType> = (args) => {
    return <Clock mode={'Digital'}/>
}




