import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import './MovePageButton.css';

type Props = {
    label: string;
};

export const MovePageButton = ({ label }: Props) => {
    const { updateMode } = useContext(StoreContext);
    const onClick = () => updateMode('MovePage');

    return (
        <div>
            <button className='move-button' onClick={onClick}>{label}</button>
        </div>
    );
};