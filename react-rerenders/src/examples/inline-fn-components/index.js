import { useState, useMemo } from 'react';

const Static = () => (
    <div>Some words of wisdom.</div>
);

const Dynamic = ({number}) => <div>You selected {number} as your number.</div>

export const InlineFnComponents = () => {
    const [number, setNumber] = useState(0);

    const InlineStatic = () => (<div>Some inline words of wisdom.</div>);
    const InlineDynamic = ({number}) => (<div>You selected {number} as your number and it was rendered inline.</div>);
    const InlineStaticForMemo = () => (<div>Some memoed words of wisdom.</div>);
    const InlineDynamicForMemo = ({number}) => (<div>You selected {number} as your number and it was memo'ed inline.</div>);
    const MemoedStatic = useMemo(() => InlineStaticForMemo, []);
    const MemoedDynamic = useMemo(() => InlineDynamicForMemo, [number]);

    return (
        <div>
            <h1>What components will trigger a re-render on state change?</h1>
            <div>
                Enter a number: <input type='text' onChange={(e) => setNumber(e.target.value)} defaultValue={number} />
            </div>
            <Static />
            <Dynamic number={number} />
            <InlineStatic />
            <InlineDynamic number={number} />
            <MemoedStatic />
            <MemoedDynamic number={number} />
        </div>
    );
};