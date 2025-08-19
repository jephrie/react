import { useContext } from 'react';
import './AddPageButton.css';
import { StoreContext } from '../store/Store';

type Props = {
    label: string;
};

const AddPageButton = ({ label }: Props) => {
    const { updateMode } = useContext(StoreContext);
    return (
        <button>
            <div className='button-label' onClick={() => updateMode('AddPage')}>
                {label}
            </div>
        </button>
    );
}

export { AddPageButton };