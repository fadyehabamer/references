import React,{ createContext, useState } from "react";

export const NameCxt = createContext("FADY");
NameCxt.displayName = "NameContext";

const NameContextProvider = (props) => {
    const name = useState("FADY");

    const value =  name ;

    return (
        <NameCxt.Provider value={value}>
            {props.children}
        </NameCxt.Provider>
    );
}

export default NameContextProvider;