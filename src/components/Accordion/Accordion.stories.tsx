import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion, {AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';


export type categoryNameType= 'Colors' | 'Events'| 'Values'
const CategoryObj = (categoryName:categoryNameType) => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...CategoryObj('Colors')
        },
        onClick: {
            ...CategoryObj('Events')
        },
        collapsed:{
            ...CategoryObj('Values')
        },
        titleValue:{
            ...CategoryObj('Values')
        },
        items: {
            ...CategoryObj('Values')
        },
        onClickBody: {
            ...CategoryObj('Events')
        }
    }
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

const callback = action('accordion mode change fired');
const callbackItem = action('some item was clicked');

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    onClick: callback,
    collapsed: true,
    titleValue: 'Menu',
    items:[],
    onClickBody:callbackItem
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    onClick: callback,
    collapsed: false,
    titleValue: 'Users',
    items:[{title: 'Vika', value: 1}, {title: 'Olga', value: 1},{title: 'Nika', value: 1}],
    onClickBody:callbackItem
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} onClick={() => setValue(!value)} collapsed={value}/>;
};
ModeChanging.args = {
    titleValue: 'Users',
    items:[{title: 'Vika', value: 1}, {title: 'Olga', value: 1},{title: 'Nika', value: 1}],
    onClickBody:callbackItem
};




