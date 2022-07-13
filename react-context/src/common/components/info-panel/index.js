import React from "react";
import { incrementRenderCount } from '../../../service/render-tracker';

export const InfoPanel = ({
    username,
    country,
}) => {
    incrementRenderCount('InfoPanel');
    
    return (
        <div>
            <p>This is the data that we have on you.</p>
            <p>Name: {username}</p>
            <p>Country: {country}</p>
        </div>
    );
};