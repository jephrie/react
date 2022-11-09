import React, { useState } from "react";

const initialState = {
    country: 'Australia',
};

export const UserLocationContext = React.createContext({
    state: initialState,
});

export const UserLocationContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const onCountryChange = (country) => setState({
        ...state,
        country,
    });
    
    const value = {
        state,
        onCountryChange,
    };

    return <UserLocationContext.Provider value={value}>{children}</UserLocationContext.Provider>;
};