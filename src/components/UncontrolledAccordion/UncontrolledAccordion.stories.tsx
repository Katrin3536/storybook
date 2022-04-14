import React from 'react';
import UncontrolledAccordion, { UncontrolledAccordionPropsType } from './UncontrolledAccordion';
import {Story} from '@storybook/react';

const CategoryObj = (categoryName: 'Values') => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        titleValue: {
            ...CategoryObj('Values'),
        },
    }
}

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args}/>;

export const ModeChanging = Template.bind({});
ModeChanging.args = {
    titleValue:"Users"
};

// export const ModeChanging = ()=> (
//     <UncontrolledAccordion titleValue={"Users"}/>
// )





