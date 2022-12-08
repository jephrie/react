import React, { useState, useMemo } from 'react';

export const ParentRenders = () => {
    const [counter, setCounter] = useState(1);
    const memoizedBlurb = useMemo(() => <Blurb />, []);

    return (
        <>
            <h1>Beware: Parent component renders</h1>
            <p>Everytime the counter increments, the blurb is re-rendered unnecessarily. Memoize the blurb to get around this.</p>
            <div>
                Counter: {counter}
            </div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>
                    Increment counter
                </button>
            </div>
            <Blurb />
            {memoizedBlurb}
        </>
    );
};

const Blurb = () => {
    return <div>This is some static text.</div>;
}