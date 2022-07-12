import React from "react";
import { RenderCounter } from "../render-counter";

let count = 0;
export const WelcomeMessage = ({
    username,
}) => {
    count++;

    return (
        <div>
            <p>Hi! Welcome back {username}.</p>
            <RenderCounter count={count} />
        </div>
    );
};