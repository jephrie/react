import { useContext } from 'react';
import './AddPageButton.css';
import { StoreContext } from '../store/Store';

type Appearance = 'small' | 'medium';

type Props = {
    appearance?: Appearance;
    label: string;
    parentPageId?: string;
};

const appearanceToClassname = (appearance: Appearance | undefined) => {
    if (!appearance || appearance === 'medium')  {
        return 'button-label-m';
    } else {
        return 'button-label-s';
    }
};

const AddPageButton = ({ appearance, label, parentPageId }: Props) => {
    const { updateMode, updateNewPageParent } = useContext(StoreContext);
    const onClick = () => {
        updateMode('AddPage');
        updateNewPageParent(parentPageId);
    };
    
    return (
        <button>
            <div className={appearanceToClassname(appearance)} onClick={onClick}>
                {label}
            </div>
        </button>
    );
}

export { AddPageButton };