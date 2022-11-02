import React from "react";

export const NameField = ({
    onChange,
    username,
}) => {
    return (
        <div>
            <p>
                Name: <input type="text" onChange={onChange} value={username} />
            </p>
        </div>
    );
};