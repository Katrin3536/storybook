import React from 'react';

export type OnOff = {
    turnOn: boolean,
    /**
     * Function that change "ON" and "OFF"
     * @param nameButton
     */
    onClick: (nameButton: string) => void
}
export const OnOff = React.memo(OnOffMemo)

export function OnOffMemo (props: OnOff) {
    const styleButtonOn = {backgroundColor: props.turnOn ? 'green' : ''};
    const styleButtonOff = {backgroundColor: props.turnOn ? '' : 'red'};
    const roundButton = {
        borderRadius: ' 50px',
        backgroundColor: props.turnOn ? 'green' : 'red'
    };
    return (
        <div>
            <button onClick={() => props.onClick('ON')} style={styleButtonOn}>ON</button>
            <button onClick={() => props.onClick('OFF')} style={styleButtonOff}>OFF</button>
            <button style={roundButton}>S</button>
        </div>
    );
};

export default OnOffMemo;