import React from "react";
import { RenderCounter } from "../render-counter";

let count = 0;
export const NameField = ({
    onChange,
    username,
}) => {
    count++;
    return (
        <div>
            <p>
                Name: <input type="text" onChange={onChange} value={username} />
            </p>
            <RenderCounter count={count} />
        </div>
    );
};