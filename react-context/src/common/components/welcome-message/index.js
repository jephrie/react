import React from "react";

export const WelcomeMessage = ({
    username,
}) => {
    return (
        <div>
            <p>Hi! Welcome back {username}.</p>
        </div>
    );
};