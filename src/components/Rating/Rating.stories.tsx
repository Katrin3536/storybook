import React, {useState} from 'react';
import {RatingMemo, RatingPropsType, RatingValueType} from './Rating';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const CategoryObj = (categoryName: 'Events' | 'Values') => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/Rating',
    component: RatingMemo,
    argTypes: {
        setRatingValue: {
                ...CategoryObj('Events'),
        },
        value: {
            ...CategoryObj('Values'),
        },
    }
};
const callback = action('rating change number of stars');

const Template
    :
    Story<RatingPropsType> = (args) => <RatingMemo {...args}/>;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    setRatingValue: callback,
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    setRatingValue: callback,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    setRatingValue: callback,
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    setRatingValue: callback,
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    setRatingValue: callback,
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    setRatingValue: callback,
};

export const ChangingRating: Story<RatingPropsType> = (args) => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return <RatingMemo {...args} value={rating} setRatingValue={setRating}/>;
};


// export const EmptyRating = ()=> (<Rating value={0} setRatingValue={x=>x}/>)
// export const Rating1 = ()=> (<Rating value={1} setRatingValue={x=>x}/>)
// export const Rating2 = ()=> (<Rating value={2} setRatingValue={x=>x}/>)
// export const Rating3 = ()=> (<Rating value={3} setRatingValue={x=>x}/>)
// export const Rating4 = ()=> (<Rating value={4} setRatingValue={x=>x}/>)
// export const Rating5 = ()=> (<Rating value={5} setRatingValue={x=>x}/>)
// export const ChangingRating = ()=> {
//     const [rating, setRating] = useState<RatingValueType>(5);
//     return <Rating value={rating} setRatingValue={setRating}/>
// }

