import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';



export type categoryNameType = 'Values' | "Events"| 'Links'| 'Types'
const CategoryObj = (categoryName: categoryNameType) => ({
    table: {
        category: categoryName
    }
});

export default {
    title: 'components/Input',
    argTypes: {
        value: {
            ...CategoryObj('Values'),
        },
        onChange: {
            ...CategoryObj('Events'),
        },
        onClick: {
            ...CategoryObj('Events'),
        },
        checked: {
            ...CategoryObj('Values'),
        },
        ref: {
            ...CategoryObj('Links'),
        },
        type: {
            ...CategoryObj('Types'),
        }
    }
};

export  type ControlledInputType = {
    value?: string,
    onChange?:()=>void
}

const Template: Story<ControlledInputType> = (args) => <input {...args}/>;

export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
    value: 'Hello'
};

export const TrackValueOfUncontrolledInput: Story<ControlledInputType> = (args) => {
    const [value, setValue] = useState<string>('');
    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return <><input {...args} onChange={callback}/> --- {value}</>;
};

export const GetValueOfUncontrolledInput: Story<ControlledInputType> = (args) => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };
    return <>
        <input {...args} ref={inputRef}/>
        <button onClick={onSave}>save</button>
        - actual value: {value}
    </>;
};

export const ControlledInput:Story<ControlledInputType>  = () => {
    let [parentValue, setParentValue] = useState<string>(' ');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return <input value={parentValue} onChange={onChange}/>;
};

export const ControlledCheckbox:Story<ControlledInputType> = () => {
    let [parentValue, setParentValue] = useState<boolean>(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>;
};

export const ControlledSelect:Story<ControlledInputType> = () => {
    let [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Larnaca</option>
        <option value={'3'}>Rome</option>
    </select>;
};