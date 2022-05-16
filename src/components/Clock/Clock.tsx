import {useEffect, useState} from 'react';

const get2digitsString = (num:number) => {
    return  num <10 ? "0" + num : num
}

export type ClockType ={}
export const Clock = (props: ClockType) => {
    let [date, setDate] = useState(new Date())

    useEffect(()=>{
        let iD = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(iD)
        }
    },[])


    return <div>
        <span>{get2digitsString(date.getHours())}</span>:
        <span>{get2digitsString(date.getMinutes())}</span>:
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>

}