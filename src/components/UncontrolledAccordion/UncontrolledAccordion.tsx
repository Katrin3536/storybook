import React, {useState} from 'react';

export type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

   let [collapsed ,setCollapsed]=useState(true)

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>{/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
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
    title: string,
    setCollapsed:(value:boolean)=>void,
    collapsed:boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }
    // console.log('AccordionTitle rendering');
    return <h3 onClick={onClickHandler}>{props.title}</h3>;
}


function AccordionBody() {
    // console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;