import React from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledOnOff, { UncontrolledOnOffType } from './UncontrolledOnOff';
import {Story} from '@storybook/react';

export type categoryNameType= 'Events'| 'Values'| 'InputValue'
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
        },
        value:{
            ...CategoryObj('InputValue')
        },
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

export type InputType = {
    value: string
}
const DefaultTemplate: Story<InputType> = (args)=> <input readOnly {...args}/>

export const DefaultInputValue = DefaultTemplate.bind({})
DefaultInputValue.args = {
    value: 'yo'
}

// export const OnMode = ()=> (<UncontrolledOnOff defaultOn={true} onChange={callback} />)
// export const OffMode = ()=> (<UncontrolledOnOff defaultOn={false} onChange={callback} />)
// export const DefaultInputValue = ()=> (<input value={'yo'} readOnly/>)






