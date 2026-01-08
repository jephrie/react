import React, { useCallback, useContext } from 'react';
import { StoreContext } from '../store/Store';
import { Mode } from '../common/Types';

export const EditPageButton = () => {
    const { updateMode } = useContext(StoreContext);
    const onClick = useCallback(() => updateMode('EditPage' as Mode), [updateMode]);
    return (
        <button onClick={onClick}>Edit</button>
    );
};