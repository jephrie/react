import React from 'react';
import { Disclaimer } from '../../common/components/disclaimer';
import { RenderCounter } from '../../common/components/render-counter';
import { AppContextProvider } from '../../common/app-context';
import { FormSection } from './section';

let count = 0;
export const MegaContextForm = () => {
    count++;

    return (
        <div>
            <AppContextProvider>
                <FormSection/>
            </AppContextProvider>
            <Disclaimer />
            <hr/>
            <RenderCounter count={count} prefix={'Form render count: '} />
        </div>
    );
};