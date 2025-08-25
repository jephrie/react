import { BaseSyntheticEvent, useContext, useState } from 'react';
import { AddPageButton } from '../page/AddPageButton';
import { StoreContext } from '../store/Store';

type Props = {
    id: string;
    title: string;
};

export const PageLink = ({ id, title }: Props) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const { currentPageId, updateCurrentPageId, updateMode } = useContext(StoreContext);
    const onClick = (e: BaseSyntheticEvent) => {
        updateCurrentPageId(id);
        updateMode('ReadPage');
    };

    return (
        <li>
            <div className='nav-link' onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                <div className='nav-link-title'>
                    {currentPageId === id ? title : <a href='#' onClick={onClick}>{title}</a>}
                </div>
                {isMouseOver && <AddPageButton label='+' appearance='small' parentPageId={id} />}
            </div>
        </li>
    );
};