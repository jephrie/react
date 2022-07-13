import React, { useContext } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { CountryField } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { RenderCounter } from '../../common/components/render-counter';
import { AppContextProvider, AppContext } from '../../common/app-context';

let count = 0;
const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
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

const FormSection = () => {
    const {
        state: {
            username,
            country,
        },
        onUsernameChange,
        onCountryChange,
    } = useContext(AppContext);
    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <hr/>
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            <hr/>
            {username ? <WelcomeMessage username={username} /> : null}
            <hr/>
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
            <hr/>
        </div>
    );
}