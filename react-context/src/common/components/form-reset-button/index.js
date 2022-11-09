import React from 'react';

export const FormResetButton = (props) => {
    const {
        setUsername,
        setNickname,
        setCountry,
    } = props;

    const resetFormValues = () => {
        setUsername();
        setNickname();
        setCountry();
    };

    return <FormResetButtonWithReset onReset={resetFormValues} />;
};

export const FormResetButtonWithReset = (props) => {
    const { onReset } = props;
    return <button onClick={onReset}>Reset Form</button>;
}