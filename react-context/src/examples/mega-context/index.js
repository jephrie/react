import React from 'react';
import { Disclaimer } from '../../common/components/disclaimer';
import { AppContextProvider } from '../../common/app-context';
import { FormSection } from './section';

export const MegaContextForm = () => {
    return (
        <div>
            <AppContextProvider>
                <FormSection/>
            </AppContextProvider>
            <Disclaimer />
        </div>
    );
};