import React from 'react';
import { Disclaimer } from '../../common/components/disclaimer';
import { RenderTrackerTable } from '../../common/components/render-tracker-table'
import { AppContextProvider } from '../../common/app-context';
import { incrementRenderCount } from '../../service/render-tracker';
import { FormSection } from './section';

export const MegaContextForm = () => {
    incrementRenderCount('MegaContextForm');

    return (
        <div>
            <AppContextProvider>
                <FormSection/>
            </AppContextProvider>
            <Disclaimer />
            <hr/>
            <RenderTrackerTable />
        </div>
    );
};