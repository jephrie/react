import React from "react";

export const InfoPanel = ({
    username,
    country,
}) => {
    return (
        <div>
            <p>This is the data that we have on you.</p>
            <p>Name: {username}</p>
            <p>Country: {country}</p>
        </div>
    );
};