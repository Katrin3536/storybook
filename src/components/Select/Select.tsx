import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

export type ItemsType = {
    title: string,
    value: string | null
}

export type SelectPropsType = {
    value: string | null,
    items: ItemsType[],
    onChange: (value: string | null) => void
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, sethoveredElementValue] = useState<string | null>(props.value);
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue);
    const selectItem = props.items.find(i => i.value === props.value);

    useEffect(() => {
        sethoveredElementValue(props.value);
    }, [props.value]);

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    };
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
                {active &&
                    <div
                        className={s.items}>{props.items.map(i => <div
                        onMouseEnter={() => sethoveredElementValue(i.value)}
                        className={s.item + ' ' + (hoveredElement === i ? s.selected : '')}
                        onClick={() => onItemClick(i.value)}
                        key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
};