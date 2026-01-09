import { BaseSyntheticEvent, useCallback, useContext, useState } from 'react';
import { AddPageButton } from '../page/AddPageButton';
import { StoreContext } from '../store/Store';

type Props = {
    id: string;
    title: string;
    highlighted?: string;
};

export const PageLink = ({ id, title, highlighted }: Props) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const { currentPageId, updateCurrentPageId, updateMode } = useContext(StoreContext);
    const onClick = (e: BaseSyntheticEvent) => {
        updateCurrentPageId(id);
        updateMode('ReadPage');
    };
    const renderTitle = useCallback(() => {
        if (highlighted) {
            const tokens = title.split(highlighted);
            return tokens.map((token: string, index: number) => {
                if (index === 0) {
                    return token;
                }
                return (
                    <>
                        <span className={index % 2 === 1 ? 'highlight-red' : 'highlight-orange'}>
                            {highlighted}
                        </span>
                        {token}
                    </>
                );
            });
        }
        return title;
    }, [highlighted, title]);

    return (
        <li>
            <div className='nav-link' onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                {currentPageId !== id ?
                    <a className='nav-link-title' onClick={onClick}>
                        {renderTitle()}
                    </a> : renderTitle()
                }
                {isMouseOver && <AddPageButton label='+' appearance='small' parentPageId={id} />}
            </div>
        </li>
    );
};