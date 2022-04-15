import React from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledOnOff, { UncontrolledOnOffType } from './UncontrolledOnOff';
import {Story} from '@storybook/react';

export type categoryNameType= 'Events'| 'Values'
const CategoryObj = (categoryName:categoryNameType) => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        onChange: {
            ...CategoryObj('Events')
        },
        defaultOn:{
            ...CategoryObj('Values')
        }
    }
}

const callback = action("on or off clicked")

const Template: Story<UncontrolledOnOffType> = (args)=> <UncontrolledOnOff {...args}/>

export const OnMode = Template.bind({})
 OnMode.args = {
     defaultOn:true,
     onChange:callback
 }

export const OffMode = Template.bind({})
OffMode.args = {
    defaultOn:false,
    onChange:callback
}

// export const OnMode = ()=> (<UncontrolledOnOff defaultOn={true} onChange={callback} />)
// export const OffMode = ()=> (<UncontrolledOnOff defaultOn={false} onChange={callback} />)
// export const DefaultInputValue = ()=> (<input value={'yo'} readOnly/>)






