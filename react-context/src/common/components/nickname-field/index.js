import React, { useContext } from 'react';
import { UserMetadataContext } from '../../user-metadata-context';

export const NicknameField = ({
    onChange,
    nickname,
}) => {
    return (
        <div>
            <p>
                Nickname: <input type="text" onChange={(event) => onChange(event.target.value)} value={nickname} />
            </p>
        </div>
    );
};

export const NicknameFieldWrapper = () => {
    const {
        state: { nickname },
        onNicknameChange,
    } = useContext(UserMetadataContext);

    return <NicknameField onChange={() => onNicknameChange(event.target.value)} nickname={nickname} />;
};