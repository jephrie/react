import React from 'react';

export const RenderCounter = ({
    count,
    prefix = 'Render count: '
}) => {
    return (
        <p>{prefix}{count}</p>
    )
};