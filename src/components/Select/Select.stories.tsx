import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from './Select';


const CategoryObj = (categoryName: 'Events' | 'Values') => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/Select',
    component: Select,
    argTypes: {
        onChange: {
            ...CategoryObj('Events'),
        },
        value: {
            ...CategoryObj('Values'),
        },
        items: {
            ...CategoryObj('Values'),
        },
    }
};

export const WithValue: Story<SelectPropsType> = (args) => {
    let [value, setValue] = useState<string | null>('2');
    return <>
        <Select
            {...args}
            value={value}
            onChange={setValue}/>
    </>;
};

WithValue.args = {
    items: [
        {title: 'Masha', value: '1'},
        {title: 'Sasha', value: '2'},
        {title: 'Pasha', value: '3'},
    ]
};


export const WithoutValue: Story<SelectPropsType> = (args) => {
    let [value, setValue] = useState<string | null>(null);
    return <>
        <Select {...args}
                value={value}
                onChange={setValue}
        />
    </>;
};

WithoutValue.args = {
    items: [
        {title: 'Masha', value: '1'},
        {title: 'Sasha', value: '2'},
        {title: 'Pasha', value: '3'},
    ]
};
