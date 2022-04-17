import React, {useState} from 'react';
import OnOffMemo  from './OnOff';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import {OnOff} from './OnOff';

const CategoryObj = (categoryName: 'Events' | 'Values') => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/OnOff',
    component: OnOffMemo,
    argTypes: {
        onClick: {
            ...CategoryObj("Events")
        },
        turnOn : {
            ...CategoryObj("Values")
        }
    }
};

const callback = action('on or off clicked');

const Template: Story<OnOff> = (args) => <OnOffMemo {...args}/>;

export const OnMode = Template.bind({});
OnMode.args = {
    turnOn: true,
    onClick: callback
};

export const OffMode = Template.bind({});
OffMode.args = {
    turnOn: false,
    onClick: callback
};

export const ModeChanging: Story<OnOff> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOffMemo {...args} turnOn={value} onClick={()=>setValue(!value)}/>;
};



// export const OnMode = ()=> (<OnOff turnOn={true} onClick={callback}/>)
// export const OffMode = ()=> (<OnOff turnOn={false} onClick={callback}/>)
// export const ModeChanging = ()=> {
//     const [value, setValue] = useState<boolean>(true);
//     return <OnOff turnOn={value} onClick={()=>setValue(!value)}/>
// }


