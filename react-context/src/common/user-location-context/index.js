import React, { useState } from "react";
import { RenderCounter } from "../components/render-counter";

const initialState = {
    country: 'Australia',
};

export const UserLocationContext = React.createContext({
    state: initialState,
});

let count = 0;
export const UserLocationContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    count++;

    const onCountryChange = (event) => setState({
        ...state,
        country: event.target.value,
    });
    
    const value = {
        state,
        onCountryChange,
    };

    return (
        <div>
            <UserLocationContext.Provider value={value}>{children}</UserLocationContext.Provider>
            <RenderCounter count={count} prefix={'UserLocationContextProvider render count: '} />
            <hr />
        </div>
    );
};