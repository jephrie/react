import React, { useState } from "react";

const initialState = {
    username: 'John',
    country: 'Australia',
};

export const AppContext = React.createContext({
    state: initialState,
});

export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

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

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};