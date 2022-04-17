import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemsType} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
// @ts-ignore
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UbcontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {
    // console.log('App rendering');

    let [value, setValue] = useState<boolean>(false);

    const onClick = (nameButton: string) => {
        setValue(nameButton === 'ON');
    };

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsedValue, setCollapsedValue] = useState<boolean>(false)

    const onClickBody = (value:number) => {
      alert(`Be happy ${value}!`)
    }

    const items:ItemsType[] = [];

    return (
        <div>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <Accordion titleValue={'Menu'}
                       collapsed={collapsedValue}
                       onClick = {()=>setCollapsedValue(!collapsedValue)}
                           onClickBody={onClickBody}
                           items={items}/>
            {/*<Accordion titleValue={'Menu'} collapsed={collapsedValue} onClick = {setCollapsedValue}/> второй способ со значением*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <UncontrolledRating />

            <OnOff turnOn={value} onClick={onClick}/>
            <UncontrolledOnOff onChange = {setValue}/> {value.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('TitleApp rendering');

    return <h1>{props.title}</h1>;
}

export default App;
