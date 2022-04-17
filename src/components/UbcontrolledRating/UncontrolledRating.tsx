import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    defaultValue?: RatingValueType,
    // value: number //(0 | 1 | 2 | 3 | 4 | 5)
}
const Star = React.memo(StarMemo)
export const UncontrolledRating = React.memo(UncontrolledRatingMemo)
export function UncontrolledRatingMemo(props: RatingPropsType) {

    const stars = [1, 2, 3, 4, 5];

    let [value, setValue] = useState(props.defaultValue? props.defaultValue: 0);

    // const onClickHandler = (clickValue: number) => {
    //     setValue(clickValue);
    // };
    return (
        <div>
            {stars.map((starIndex, index) => <Star selected={value > index} setValue={setValue} index={starIndex}/>)}
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    setValue: (clickValue: number) => void,
    index: number,
}

function StarMemo(props: StarPropsType) {

    const onClickHandler = () => {
        props.setValue(props.index)
    }
    return <span onClick={() => onClickHandler()}>{props.selected ? <b>star</b> : 'star'}</span>;
}