import React, { createContext, useReducer, useMemo } from 'react';

const userNameInitialState = {
    username: 'Robert'
};
const userNicknameInitialState = { nickname: 'Bob' };
const locationInitialState = { country: 'Australia' };

const initialState = {
    ...userNameInitialState,
    ...userNicknameInitialState,
    ...locationInitialState,
};

export const UserNameContext = createContext(userNameInitialState);
export const UserNicknameContext = createContext(userNicknameInitialState);
export const LocationContext = createContext(locationInitialState);
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
            return action.state;
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const mutators = useMemo(() => {
        const onUsernameChange = (username) =>
            dispatch({
                type: 'updateName',
                username,
            });
        const onNicknameChange = (nickname) =>
            dispatch({
                type: 'updateNickname',
                nickname,
            });
        const onCountryChange = (country) => 
            dispatch({
                type: 'updateCountry',
                country,
            });
        const onReset = () => 
            dispatch({
                type: 'updateAll',
                state: initialState,
            });
        return {
            onUsernameChange,
            onNicknameChange,
            onCountryChange,
            onReset,
        };
    }, []);

    // Need to memoize these values since they're creating new objects and could cause many unnecessary re-renders.
    // This approach allows us to have more than 1 value per context.
    const usernameValue = useMemo(() => (
        { username: state.username }
    ), [state.username]);

    const nicknameValue = useMemo(() => (
        { nickname: state.nickname }
    ), [state.nickname]);

    const countryValue = useMemo(() => (
        { country: state.country }
    ), [state.country]);

    return (
        <UserMutatorsContext.Provider value={mutators}>
            <UserNameContext.Provider value={usernameValue}>
                <UserNicknameContext.Provider value={nicknameValue}>
                    <LocationContext.Provider value={countryValue}>
                        {children}
                    </LocationContext.Provider>
                </UserNicknameContext.Provider>
            </UserNameContext.Provider>
        </UserMutatorsContext.Provider>
    );
};