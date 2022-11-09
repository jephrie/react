import React, { useState, useMemo } from "react";

const initialState = {
    username: 'Robert',
    nickname: 'Bob',
    country: 'Australia',
};

export const AppContext = React.createContext({
    state: initialState,
});

export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const value = useMemo(() => {
        const onUsernameChange = (username) => setState({
            ...state,
            username,
        });
        const onNicknameChange = (nickname) => setState({
            ...state,
            nickname,
        });
        const onCountryChange = (country) => setState({
            ...state,
            country,
        });
        const onReset = () => setState(initialState);

        return {
            state,
            onUsernameChange,
            onNicknameChange,
            onCountryChange,
            onReset,
        };
    }, [state]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};