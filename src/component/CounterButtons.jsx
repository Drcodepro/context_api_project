import React from "react";
// this will give acces of the context values that passed by that context
import { useContext } from "react";
import {counterContext} from "../context/ContextProvider";


export default function CounterButtons(){
const counter = useContext(counterContext);

    function countIncrease(){
     counter.setcount(counter.count+1);
    }

    function countDecrease(){
        counter.setcount(counter.count-1);
    }

    return (<>
        <button onClick={countIncrease}>increase</button>
        <button onClick={countDecrease}>decrease</button>
        </>)
}