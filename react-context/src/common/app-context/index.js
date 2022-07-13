import React, { useState } from "react";
import { RenderCounter } from "../components/render-counter";

const initialState = {
    username: 'John',
    country: 'Australia',
};

export const AppContext = React.createContext({
    state: initialState,
});

let count = 0;
export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    count++;

    const onUsernameChange = (event) => setState({
        ...state,
        username: event.target.value,
    });
    const onCountryChange = (event) => setState({
        ...state,
        country: event.target.value,
    });

    const value = {
        state,
        onUsernameChange,
        onCountryChange,
    };

    return (
        <div>
            <AppContext.Provider value={value}>{children}</AppContext.Provider>
            <RenderCounter count={count} prefix={'AppContextProvider render count: '} />
            <hr />
        </div>
    );
};