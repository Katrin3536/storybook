import React from 'react';
import {RatingPropsType, UncontrolledRating} from './UncontrolledRating';
import {Story} from '@storybook/react';

const CategoryObj = (categoryName: 'Values') => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {
        defaultValue: {
            ...CategoryObj('Values'),
        },
    }
};

const Template: Story<RatingPropsType> = (args) => <UncontrolledRating {...args}/>;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    defaultValue: 0
};

export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1
};

export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2
};

export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3
};

export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4
};

export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5
};


// export const EmptyRating = ()=> (<UncontrolledRating defaultValue={0} />)
// export const Rating1 = ()=> (<UncontrolledRating defaultValue={1} />)
// export const Rating2 = ()=> (<UncontrolledRating defaultValue={2} />)
// export const Rating3 = ()=>(<UncontrolledRating defaultValue={3}/>)
// export const Rating4 = ()=>(<UncontrolledRating defaultValue={4} />)
// export const Rating5 = ()=> (<UncontrolledRating defaultValue={5}/>)




