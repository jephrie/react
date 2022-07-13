import React from "react";
import { incrementRenderCount } from '../../../service/render-tracker';

export const NameField = ({
    onChange,
    username,
}) => {
    incrementRenderCount('NameField');

    return (
        <div>
            <p>
                Name: <input type="text" onChange={onChange} value={username} />
            </p>
        </div>
    );
};