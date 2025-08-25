import { useState } from 'react';
import { AddPageButton } from '../page/AddPageButton';

type Props = {
    id: string;
    title: string;
};

export const PageLink = ({ id, title }: Props) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <li>
            <div className='nav-link' onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                <div className='nav-link-title'>
                    {title}
                </div>
                {isMouseOver && <AddPageButton label='+' appearance='small' parentPageId={id} />}
            </div>
        </li>
    );
};