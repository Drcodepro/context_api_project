import logo from './logo.svg';
import './App.css';
import {counterContext} from './context/ContextProvider';
// this will helps to acces the values of context
import { useContext } from 'react';
import CounterButtons from './component/CounterButtons';

function App() {
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
