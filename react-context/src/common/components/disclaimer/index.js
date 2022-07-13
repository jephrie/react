import React from "react";
import { incrementRenderCount } from '../../../service/render-tracker';

export const Disclaimer = () => {
    incrementRenderCount('Disclaimer');

    return (
        <div>
            <p>We reserve the right to use your data!</p>
        </div>
    );
};