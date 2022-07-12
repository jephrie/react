import React from "react";
import { RenderCounter } from "../render-counter";

let count = 0;
export const InfoPanel = ({
    username,
    country,
}) => {
    count++;

    return (
        <div>
            <p>This is the data that we have on you.</p>
            <p>Name: {username}</p>
            <p>Country: {country}</p>
            <RenderCounter count={count} />
        </div>
    );
};