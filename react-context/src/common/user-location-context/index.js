import React, { useState } from "react";
import { incrementRenderCount } from '../../service/render-tracker';

const initialState = {
    country: 'Australia',
};

export const UserLocationContext = React.createContext({
    state: initialState,
});

export const UserLocationContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    incrementRenderCount('UserLocationContextProvider');

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
        </div>
    );
};