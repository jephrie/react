import React from "react";
import { incrementRenderCount } from '../../../service/render-tracker';

export const WelcomeMessage = ({
    username,
}) => {
    incrementRenderCount('WelcomeMessage');

    return (
        <div>
            <p>Hi! Welcome back {username}.</p>
        </div>
    );
};