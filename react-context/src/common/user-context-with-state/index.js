import React, { createContext, useState, useMemo } from 'react';

const initialState = {
    username: 'Robert',
    nickname: 'Bob',
    country: 'Australia',
};

export const UserContextWithState = createContext(initialState);
export const UserMutatorsContextWithState = createContext({});

export const UserContextProviderWithState = ({ children }) => {
    const [state, setState] = useState(initialState);

    const mutators = useMemo(() => {
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
            onUsernameChange,
            onNicknameChange,
            onCountryChange,
            onReset,
        };
    }, [state]);

    return (
        <UserContextWithState.Provider value={state}>
            <UserMutatorsContextWithState.Provider value={mutators}>
                {children}
            </UserMutatorsContextWithState.Provider>
        </UserContextWithState.Provider>
    );
};