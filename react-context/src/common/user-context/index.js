import React, { createContext, useReducer, useMemo } from 'react';

const initialState = {
    username: 'Robert',
    nickname: 'Bob',
    country: 'Australia',
};

export const UserContext = createContext(initialState);
export const UserMutatorsContext = createContext({});

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateName':
            return { ...state, username: action.username };
        case 'updateNickname':
            return { ...state, nickname: action.nickname };
        case 'updateCountry':
            return { ...state, country: action.country };
        case 'updateAll':
            return {
                username: action.username,
                nickname: action.nickname,
                country: action.country,
            };
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const mutators = useMemo(() => {
        const onUsernameChange = (username) => dispatch({
            type: 'updateName',
            username,
        });
        const onNicknameChange = (nickname) => dispatch({
            type: 'updateNickname',
            nickname,
        });
        const onCountryChange = (country) => dispatch({
            type: 'updateCountry',
            country,
        });
        const onReset = () => dispatch({
            type: 'updateAll',
            ...initialState,
        });
        console.log('mutators');
        return {
            onUsernameChange,
            onNicknameChange,
            onCountryChange,
            onReset,
        };
    }, []);

    return (
        <UserMutatorsContext.Provider value={mutators}>
            <UserContext.Provider value={state}>
                {children}
            </UserContext.Provider>
        </UserMutatorsContext.Provider>
    );
};