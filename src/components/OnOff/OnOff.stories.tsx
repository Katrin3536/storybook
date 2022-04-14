import React, {useState} from 'react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';

const CategoryObj = (categoryName: 'Events' | 'Values') => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/OnOff',
    component: OnOff,
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

const Template: Story<OnOff> = (args) => <OnOff {...args}/>;

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
    return <OnOff {...args} turnOn={value} onClick={()=>setValue(!value)}/>;
};



// export const OnMode = ()=> (<OnOff turnOn={true} onClick={callback}/>)
// export const OffMode = ()=> (<OnOff turnOn={false} onClick={callback}/>)
// export const ModeChanging = ()=> {
//     const [value, setValue] = useState<boolean>(true);
//     return <OnOff turnOn={value} onClick={()=>setValue(!value)}/>
// }


