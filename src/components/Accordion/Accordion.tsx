import React from 'react';

export type ItemsType = {
    title: string,
    value: number
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    /**
     * Function that is called when accordion is opened(not collapsed) or closed
     */
    onClick: () => void
    // onClick:(value:boolean)=>void-второй способ со значением
    /**
     * Color of the title
     */
    color?: string,
    /**
     * Items are a list of users with id=value
     */
    items: ItemsType[],
    /**
     * Function shows alerts
     */
    onClickBody: (value: number) => void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
        {/*<AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.collapsed}/> второй способ с передачей значения*/}
        {!props.collapsed && <AccordionBody items={props.items} onClickBody={props.onClickBody}/>}

    </div>;
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void,
    color?: string
    // onClick:(value:boolean)=>void,
    // value:boolean второй способ со значением
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 style={{color: props.color ? props.color : 'black'}}
               onClick={(e) => props.onClick()}
    >
        {props.title}
    </h3>;
    // return <h3 onClick={()=>props.onClick(!props.value)}>{props.title}</h3> второй способ со значением
}

export type AccordionBodyPropsType = {
    items: ItemsType[],
    onClickBody: (value: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => {props.onClickBody(i.value);
            }}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;