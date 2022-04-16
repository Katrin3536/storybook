import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('reducer should change value to opposite value', ()=>{
//data
const state:StateType = {
    collapsed:false
}
 //action
const newState = reducer(state, {type:TOGGLE_COLLAPSED})
 //expectation
expect(newState.collapsed).toBe(true)
})

test('reducer should error', ()=>{
//data
    const state:StateType = {
        collapsed:false
    }
    //expectation
    expect(()=> {
        reducer(state, {type: 'ERROR'})
    }).toThrowError()
})