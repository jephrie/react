import React from "react";
import { RenderCounter } from "../render-counter";

let count = 0;
export const Disclaimer = () => {
    count++;

    return (
        <div>
            <p>We reserve the right to use your data!</p>
            <RenderCounter count={count} />
        </div>
    );
};