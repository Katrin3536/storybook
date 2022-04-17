import React, {useReducer} from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

export type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}
const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)

function UncontrolledAccordionMemo(props: UncontrolledAccordionPropsType) {
   // let [collapsed ,setCollapsed]=useState(true)
   let [collapsed ,dispatch]=useReducer(reducer, {collapsed:true})

    const AccordionTitle = React.memo(AccordionTitleMemo);
    const AccordionBody = React.memo(AccordionBodyMemo);

    return <div>
        {/*<AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>/!*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*!/*/}
        <AccordionTitle title={props.titleValue} setCollapsed={()=>dispatch({type:TOGGLE_COLLAPSED})} collapsed={collapsed}/>{/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
        {!collapsed.collapsed && <AccordionBody/>}
    </div>;
}

type AccordionTitlePropsType = {
    title: string,
    setCollapsed:(value:boolean)=>void,
    collapsed:StateType
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed.collapsed)
    }
    // console.log('AccordionTitle rendering');
    return <h3 onClick={onClickHandler}>{props.title}</h3>;
}

function AccordionBodyMemo() {
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