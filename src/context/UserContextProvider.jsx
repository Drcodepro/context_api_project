import React from "react";

import UserContext from "./userContext";
import { useState } from "react";

// created a context provider that will provide all the value to its childrens
export default function  UserContextProvider(children){
   const [user,setUser] = useState(null);

    return (<UserContext.Provider value ={{user,setUser}}>
            {children}
        </UserContext.Provider>)
}