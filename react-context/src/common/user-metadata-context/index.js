import React, { useState } from "react";
import { incrementRenderCount } from '../../service/render-tracker';

const initialState = {
    username: 'John',
};

export const UserMetadataContext = React.createContext({
    state: initialState,
});

export const UserMetadataContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    incrementRenderCount('UserMetadataContextProvider');

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