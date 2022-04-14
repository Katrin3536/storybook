import React from 'react';

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
    color?: string
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
        {/*<AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.collapsed}/> второй способ с передачей значения*/}
        {!props.collapsed && <AccordionBody/>}

    </div>;
}

// переписали условие выше
// function Accordion(props:AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed === true) {
//         return <div>
//             <AccordionTitle title = {props.titleValue}/>
//         </div>
//     }
//     return <div>
//         <AccordionTitle title = {props.titleValue}/>
//         <AccordionBody/>
//     </div>
// }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void,
    color?: string
    // onClick:(value:boolean)=>void,
    // value:boolean второй способ со значением
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 style={{color: props.color ? props.color : 'black'}} onClick={(e) => props.onClick()}>{props.title}</h3>;
    // return <h3 onClick={()=>props.onClick(!props.value)}>{props.title}</h3> второй способ со значением
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;