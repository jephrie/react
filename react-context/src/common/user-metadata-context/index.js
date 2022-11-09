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

    const onUsernameChange = (username) => setState({
        ...state,
        username,
    });
    
    const onNicknameChange = (nickname) => setState({
        ...state,
        nickname,
    });
    
    const value = {
        state,
        onUsernameChange,
        onNicknameChange,
    };

    return <UserMetadataContext.Provider value={value}>{children}</UserMetadataContext.Provider>;
};