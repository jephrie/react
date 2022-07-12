import React, { useEffect } from 'react';
import { RenderTracker } from '../../render-tracker';

const RenderCounterComponent = ({
    count,
}) => {
    return (
        <p>Render count: {count}</p>
    )
};

export const RenderCounter = (props) => {
    let renderTracker;
    useEffect(() => {
        renderTracker = new RenderTracker();
    }, []);
    if (renderTracker) {
        renderTracker.increment();
    }
    return (
        <RenderCounterComponent count={renderTracker ? renderTracker.count : 0} {...props} />
    )
}