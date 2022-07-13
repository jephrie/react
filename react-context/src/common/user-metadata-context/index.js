import React, { useState } from "react";
import { RenderCounter } from "../components/render-counter";

const initialState = {
    username: 'John',
};

export const UserMetadataContext = React.createContext({
    state: initialState,
});

let count = 0;
export const UserMetadataContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    count++;

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
            <RenderCounter count={count} prefix={'UserMetadataContextProvider render count: '} />
            <hr />
        </div>
    );
};