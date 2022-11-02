import React, { useState } from "react";

const initialState = {
    username: 'John',
};

export const UserMetadataContext = React.createContext({
    state: initialState,
});

export const UserMetadataContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const onUsernameChange = (event) => setState({
        ...state,
        username: event.target.value,
    });
    
    const value = {
        state,
        onUsernameChange,
    };

    return (
        <div>
            <UserMetadataContext.Provider value={value}>{children}</UserMetadataContext.Provider>
        </div>
    );
};