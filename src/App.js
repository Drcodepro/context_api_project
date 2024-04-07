import './App.css';
import {counterContext} from './context/ContextProvider';
// this will helps to acces the values of context
import { useContext } from 'react';
import CounterButtons from './component/CounterButtons';

function App() {
  // acces the values that we have passed from context 
  // counter variable will contain the object that contain all the values
  const counter = useContext(counterContext);  
  return (
    <>
    <h1>{counter.count}</h1>  
    <CounterButtons/> <br/>
    <CounterButtons/><br/>
    <CounterButtons/><br/>
    <CounterButtons/>
    </>
  );
}

export default App;
