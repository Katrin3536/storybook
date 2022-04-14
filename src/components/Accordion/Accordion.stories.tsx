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
        }
    }
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

const callback = action('accordion mode change fired');

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    onClick: callback,
    collapsed: true,
    titleValue: 'Menu'
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    onClick: callback,
    collapsed: false,
    titleValue: 'Users'
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} onClick={() => setValue(!value)} collapsed={value}/>;
};
ModeChanging.args = {
    titleValue: 'Users',
};




