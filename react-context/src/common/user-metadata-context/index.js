import React, { useState } from "react";

const initialState = {
    username: 'Robert',
    nickname: 'Bob',
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
    
    const onNicknameChange = (event) => setState({
        ...state,
        nickname: event.target.value,
    });
    
    const value = {
        state,
        onUsernameChange,
        onNicknameChange,
    };

    return <UserMetadataContext.Provider value={value}>{children}</UserMetadataContext.Provider>;
};