import React, { useState } from 'react';

import { getAllRenderCounts, getRenderCount } from "../../../service/render-tracker";

export const RenderTrackerTable = () => {
    const [updateTrigger, setUpdateTrigger] = useState(false);
    const renderCounts = getAllRenderCounts();
    const renderCountKeys = [...renderCounts.keys()];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {renderCountKeys.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {renderCountKeys.map((key) => (
                            <td key={`${key}-count`}>{getRenderCount(key)}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <button onClick={() => setUpdateTrigger(!updateTrigger)}>Update table</button>
        </div>
    );
};