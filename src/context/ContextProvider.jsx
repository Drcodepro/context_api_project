import React from "react";
import { useState } from "react";
// import { createContext } from "react";

// created a context 
export const counterContext = React.createContext(null);

// created a context-provider that will provide all the value to its childrens
export default function  ContextProvider(prop){
   const [count,setcount] = useState(0);

   // passed the value to the contextprovider that can be used by all its childrens
    return (<counterContext.Provider value ={{count,setcount}}>   
            {prop.children}
           </counterContext.Provider>)
}